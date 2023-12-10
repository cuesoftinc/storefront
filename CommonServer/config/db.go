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
	dsn := os.Getenv("DATABASE_URL")

	if dsn == "" {
		log.Fatal("Missing DATABASE_URL environment variable")
	}
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

	err = DB.AutoMigrate(&models.Favorite{})
	if err != nil {
		log.Println("Error Migrating Favorite Table")
		return nil, err
	}

	err = DB.AutoMigrate(&models.Cart{})
	if err != nil {
		log.Println("Error Migrating Cart Table")
		return nil, err
	}

	log.Println("Database Migrations Successful")

	return DB, nil
}
