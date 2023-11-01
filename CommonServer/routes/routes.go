package routes

import (
	"github.com/CuesoftCloud/storefront/controllers"
	"github.com/CuesoftCloud/storefront/middlewares"
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// SetupRoutes is a function that sets up the routes for the server
func SetupRoutes(server *gin.Engine, db *gorm.DB) {
	roleRepo := repository.NewRoleRepository(db)
	userRepo := repository.NewUserRepository(db)
	_ = repository.NewCategoryRepository(db)
	_ = repository.NewProductRepository(db)
	userController := controllers.NewUserController(db)
	productController := controllers.NewProductController(db)
	admin := roleRepo.GetAdminRoleID()

	server.GET("/ping", controllers.ControllerPing)

	apiRoutes := server.Group("/api")
	userRoutes := apiRoutes.Group("/user")
	{
		userRoutes.POST("/register", userController.ControllerRegister)
		userRoutes.POST("/login", userController.ControllerLogin)
	}

	productRoutes := apiRoutes.Group("/product")
	{
		productRoutes.POST("admin/create", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.CreateNewProduct)
		productRoutes.GET("/:id", middlewares.AuthorizeJWT(), productController.GetOneProduct)
		productRoutes.GET("/", middlewares.AuthorizeJWT(), productController.GetAllProducts)
		productRoutes.PUT("/:id", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.UpdateOneProduct)
		productRoutes.DELETE("/:id", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.DeleteOneProduct)
		productRoutes.POST("admin/category/create", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.CreateNewCategory)
		productRoutes.POST("/admin/category/:category_id/subCategory/create", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.CreateSubCategory)
	}
}
