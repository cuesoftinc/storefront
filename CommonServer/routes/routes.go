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
	cartController := controllers.NewCartController(db)
	favoriteController := controllers.NewFavoriteController(db)
	admin := roleRepo.GetAdminRoleID()

	server.GET("/ping", controllers.ControllerPing)

	apiRoutes := server.Group("/api")
	userRoutes := apiRoutes.Group("/user")
	{
		userRoutes.POST("/register", userController.ControllerRegister)
		userRoutes.POST("/login", userController.ControllerLogin)
	}

	adminRoutes := apiRoutes.Group("/admin")
	{
		adminRoutes.POST("/create", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.CreateNewProduct)
		adminRoutes.PUT("/:id", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.UpdateOneProduct)
		adminRoutes.DELETE("/:id", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.DeleteOneProduct)
		adminRoutes.POST("/category/create", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.CreateNewCategory)
		adminRoutes.POST("/category/:category_id/subCategory/create", middlewares.AuthorizeJWT(), middlewares.AuthorizeAdmin(userRepo, admin), productController.CreateSubCategory)
	}

	productRoutes := apiRoutes.Group("/product")
	{
		productRoutes.GET("/:id", middlewares.AuthorizeJWT(), productController.GetOneProduct)
		productRoutes.GET("/", middlewares.AuthorizeJWT(), productController.GetAllProducts)
		productRoutes.GET("/category/:category_id", middlewares.AuthorizeJWT(), productController.GetProductsByCategory)
		productRoutes.GET("/category/:category_id/subCategory/:sub_category_id", middlewares.AuthorizeJWT(), productController.GetProductsBySubCategory)
	}

	cartRoutes := apiRoutes.Group("/cart")
	{
		cartRoutes.POST("/create", middlewares.AuthorizeJWT(), cartController.CreateNewCart)
		cartRoutes.GET("/", middlewares.AuthorizeJWT(), cartController.GetUserCarts)
		//cartRoutes.DELETE("/:id", middlewares.AuthorizeJWT(), cartController.RemoveFromCart)
	}

	favoriteRoutes := apiRoutes.Group("/favorite")
	{
		favoriteRoutes.POST("/create", middlewares.AuthorizeJWT(), favoriteController.CreateNewFavorite)
		favoriteRoutes.GET("/", middlewares.AuthorizeJWT(), favoriteController.GetUserFavorites)
		//favoriteRoutes.DELETE("/:id", middlewares.AuthorizeJWT(), favoriteController.RemoveFromFavorite)
	}
}
