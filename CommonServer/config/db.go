package config

import (
	"github.com/CuesoftCloud/storefront/models"
	"github.com/CuesoftCloud/storefront/seeds"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

var DB *gorm.DB

func ConnectDB() (*gorm.DB, error) {
	var err error
	dsn := "host=" + os.Getenv("DB_HOST") + " user=" + os.Getenv("DB_USER") + " password=" + os.Getenv("DB_PASSWORD") + " dbname=storefront port=" + os.Getenv("DB_PORT") + " sslmode=disable TimeZone=Africa/Lagos"

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	log.Println("Connection Opened to Database")

	err = DB.AutoMigrate(&models.User{})
	if err != nil {
		log.Println("Error Migrating User Table")
		return nil, err
	}

	err = DB.AutoMigrate(&models.Role{})
	if err != nil {
		log.Println("Error Migrating Role Table")
		return nil, err
	}

	// If Roles Table is Empty, Seed it
	var roles []models.Role
	DB.Find(&roles)
	if len(roles) == 0 {
		if err := seeds.SeedRoles(DB); err != nil {
			log.Println("Error Seeding Roles")
			return nil, err
		}
	}

	err = DB.AutoMigrate(&models.Product{})
	if err != nil {
		log.Println("Error Migrating Product Table")
		return nil, err
	}

	err = DB.AutoMigrate(&models.Category{})
	if err != nil {
		log.Println("Error Migrating Category Table")
		return nil, err
	}

	err = DB.AutoMigrate(&models.SubCategory{})
	if err != nil {
		log.Println("Error Migrating SubCategory Table")
		return nil, err
	}

	log.Println("Database Migrations Successful")

	return DB, nil
}
