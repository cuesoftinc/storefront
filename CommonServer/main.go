package main

import (
	"fmt"
	"log"
	"os"

	"github.com/CuesoftCloud/storefront/config"
	"github.com/CuesoftCloud/storefront/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// main is the entry point for the server
func main() {
	config.LoadEnvVar()
	db, err := config.ConnectDB()
	if err != nil {
		log.Fatalln(fmt.Sprintf("Error Connecting to Database: %v", err))
		return
	}

	server := gin.Default()
	server.Use(cors.New(cors.Config{
		AllowAllOrigins:  true,
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Authorization", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))
	routes.SetupRoutes(server, db)
	err = server.Run(os.Getenv("PORT"))
	if err != nil {
		log.Fatalln(fmt.Sprintf("Error Starting Server: %v", err))
		return
	}
}
