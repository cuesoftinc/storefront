package seeds

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
)

func SeedRoles(db *gorm.DB) error {
	roles := []models.Role{
		{Name: "Admin"},
		{Name: "User"},
	}

	for _, role := range roles {
		creation := db.Create(&role)
		if creation.Error != nil {
			return creation.Error
		}
	}

	return nil
}
