package controllers

import (
	"github.com/CuesoftCloud/storefront/models"
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"log"
	"net/http"
	"strconv"
)

type ProductController interface {
	CreateNewProduct(ctx *gin.Context)
	GetOneProduct(ctx *gin.Context)
	GetAllProducts(ctx *gin.Context)
	UpdateOneProduct(ctx *gin.Context)
	DeleteOneProduct(ctx *gin.Context)
	CreateNewCategory(ctx *gin.Context)
	CreateSubCategory(ctx *gin.Context)
}

type ProductResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

type productController struct {
	productRepo   repository.ProductRepository
	categoryRepo  repository.CategoryRepository
	categories    []models.Category
	subCategories []models.SubCategory
}

func NewProductController(db *gorm.DB) ProductController {
	return &productController{
		productRepo:   repository.NewProductRepository(db),
		categoryRepo:  repository.NewCategoryRepository(db),
		categories:    repository.NewCategoryRepository(db).GetCategories(),
		subCategories: repository.NewCategoryRepository(db).GetSubCategories(),
	}
}

func (pc *productController) CreateNewProduct(ctx *gin.Context) {
	var product models.Product

	if err := ctx.ShouldBindJSON(&product); err != nil {
		log.Println(err)
		ctx.JSON(http.StatusBadRequest, ProductResponse{
			Success: false,
			Message: "Invalid request body",
		})
	}

	product, err := pc.productRepo.AddProduct(product)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error creating product",
		})
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Product created successfully",
		Data:    product,
	})
}

func (pc *productController) GetOneProduct(ctx *gin.Context) {
	var product models.Product
	var categoryName string
	var subCategoryName string

	id, err := strconv.Atoi(ctx.Param("id"))

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusBadRequest, ProductResponse{
			Success: false,
			Message: "Invalid product ID",
		})
		return
	}
	product, err = pc.productRepo.GetProduct(id)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error getting product",
		})
		return
	}

	// Get the product category and subcategory names
	for _, category := range pc.categories {
		if category.ID == product.CategoryID {
			categoryName = category.Name
			break
		}
	}

	for _, subCategory := range pc.subCategories {
		if subCategory.ID == product.SubCategoryID {
			subCategoryName = subCategory.Name
			break
		}
	}

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error getting product category",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Product retrieved successfully",
		Data: map[string]interface{}{
			"product":           product,
			"category_name":     categoryName,
			"sub_category_name": subCategoryName,
		},
	})
}

func (pc *productController) GetAllProducts(ctx *gin.Context) {
	products, err := pc.productRepo.GetProducts()
	categories := pc.categoryRepo.GetCategories()
	subCategories := pc.categoryRepo.GetSubCategories()

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error retrieving all products",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Products retrieved successfully",
		Data: map[string]interface{}{
			"products":       products,
			"categories":     categories,
			"sub_categories": subCategories,
		},
	})
}

func (pc *productController) UpdateOneProduct(ctx *gin.Context) {
}

func (pc *productController) DeleteOneProduct(ctx *gin.Context) {

}

func (pc *productController) CreateNewCategory(ctx *gin.Context) {
	var category models.Category

	if err := ctx.ShouldBindJSON(&category); err != nil {
		log.Println(err)
		ctx.JSON(http.StatusBadRequest, ProductResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	category, err := pc.categoryRepo.AddCategory(category)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error creating category",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Category created successfully",
		Data:    category,
	})
}

func (pc *productController) CreateSubCategory(ctx *gin.Context) {
	var subCategory models.SubCategory

	if err := ctx.ShouldBindJSON(&subCategory); err != nil {
		log.Println(err)
		ctx.JSON(http.StatusBadRequest, ProductResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	// Take category ID from request params and convert to uint
	categoryID, err := strconv.Atoi(ctx.Param("category_id"))

	subCategory.CategoryID = uint(categoryID)

	subCategory, err = pc.categoryRepo.AddSubCategory(subCategory)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error creating subcategory",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Subcategory created successfully",
		Data:    subCategory,
	})
}
