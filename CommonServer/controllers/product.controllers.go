package controllers

import (
	"github.com/CuesoftCloud/storefront/models"
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"log"
	"net/http"
)

type ProductController interface {
	CreateNewProduct(ctx *gin.Context)
	GetOneProduct(ctx *gin.Context)
	GetAllProducts(ctx *gin.Context)
	UpdateOneProduct(ctx *gin.Context)
	DeleteOneProduct(ctx *gin.Context)
	CreateNewCategory(ctx *gin.Context)
	CreateSubCategory(ctx *gin.Context)
	GetProductsByCategory(ctx *gin.Context)
	GetProductsBySubCategory(ctx *gin.Context)
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
		return
	}

	product, err := pc.productRepo.AddProduct(product)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error creating product",
		})
		return
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

	id := ctx.Param("id")

	product, err := pc.productRepo.GetProduct(id)

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
	var product models.Product

	if err := ctx.ShouldBindJSON(&product); err != nil {
		log.Println(err)
		ctx.JSON(http.StatusBadRequest, ProductResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	product, err := pc.productRepo.UpdateProduct(product)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error updating product",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Product updated successfully",
		Data:    product,
	})

}

func (pc *productController) DeleteOneProduct(ctx *gin.Context) {
	var product models.Product

	id := ctx.Param("id")

	product.ID = id
	product, err := pc.productRepo.DeleteProduct(product)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error deleting product",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Product deleted successfully",
		Data:    product,
	})
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

	// Take category ID from request params
	categoryID := ctx.Param("category_id")

	subCategory.CategoryID = categoryID

	subCategory, err := pc.categoryRepo.AddSubCategory(subCategory)

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

func (pc *productController) GetProductsByCategory(ctx *gin.Context) {
	var products []models.Product

	categoryID := ctx.Param("category_id")

	products, err := pc.productRepo.GetProductsByCategory(categoryID)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error getting products",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Products retrieved successfully",
		Data:    products,
	})
}

func (pc *productController) GetProductsBySubCategory(ctx *gin.Context) {
	var products []models.Product

	categoryID := ctx.Param("category_id")
	subCategoryID := ctx.Param("sub_category_id")

	products, err := pc.productRepo.GetProductsBySubCategory(categoryID, subCategoryID)

	if err != nil {
		log.Println(err)
		ctx.JSON(http.StatusInternalServerError, ProductResponse{
			Success: false,
			Message: "Error getting products",
		})
		return
	}

	ctx.JSON(http.StatusOK, ProductResponse{
		Success: true,
		Message: "Products retrieved successfully",
		Data:    products,
	})
}
