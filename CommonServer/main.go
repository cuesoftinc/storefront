package main

import (
	"fmt"
	"os"

	"github.com/CuesoftCloud/storefront/config"
	"github.com/CuesoftCloud/storefront/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// main is the entry point for the server
func main() {
	config.LoadEnvVar()
	server := gin.Default()
	server.Use(cors.Default())
	routes.SetupRoutes(server)
	err := server.Run(os.Getenv("PORT"))
	if err != nil {
		fmt.Println(err)
		return
	}
}
