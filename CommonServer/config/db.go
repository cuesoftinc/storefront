package config

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

var DB *gorm.DB

func ConnectDB() *gorm.DB {
	var err error
	dsn := "host=" + os.Getenv("DB_HOST") + " user=" + os.Getenv("DB_USER") + " password=" + os.Getenv("DB_PASSWORD") + " dbname=storefront port=" + os.Getenv("DB_PORT") + " sslmode=disable TimeZone=Africa/Lagos"

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	log.Println("Connection Opened to Database")

	err = DB.AutoMigrate(&models.User{})
	if err != nil {
		return nil
	}
	log.Println("Database Migration Successful")

	return DB
}
