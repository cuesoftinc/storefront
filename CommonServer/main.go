package main

import (
	"fmt"
	"github.com/CuesoftCloud/storefront/config"
	"github.com/CuesoftCloud/storefront/routes"
	"github.com/gin-gonic/gin"
	"os"
)

// main is the entry point for the server
func main() {
	config.LoadEnvVar()
	server := gin.Default()
	routes.SetupRoutes(server)
	err := server.Run(os.Getenv("PORT"))
	if err != nil {
		fmt.Println(err)
		return
	}
}
