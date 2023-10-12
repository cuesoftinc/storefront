package routes

import (
	"github.com/CuesoftCloud/storefront/controllers"
	"github.com/gin-gonic/gin"
)

// SetupRoutes is a function that sets up the routes for the server
func SetupRoutes(server *gin.Engine) {
	userController := controllers.NewUserController()

	server.GET("/ping", controllers.ControllerPing)

	apiRoutes := server.Group("/api")
	userRoutes := apiRoutes.Group("/user")
	{
		userRoutes.POST("/register", userController.ControllerRegister)
		userRoutes.POST("/login", userController.ControllerLogin)
	}
}
