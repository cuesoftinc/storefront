package repository

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
	"log"
)

type RoleRepository interface {
	GetDefaultRoleID() (string, error)
	GetAdminRoleID() string
}

type roleRepository struct {
	connection *gorm.DB
}

func NewRoleRepository(db *gorm.DB) RoleRepository {
	return &roleRepository{
		connection: db,
	}
}

func (db *roleRepository) GetDefaultRoleID() (string, error) {
	var role models.Role
	result := db.connection.First(&role, "name = ?", "User")
	return role.ID, result.Error
}

func (db *roleRepository) GetAdminRoleID() string {
	var role models.Role
	result := db.connection.First(&role, "name = ?", "Admin")
	if result.Error != nil {
		log.Println("Error Getting Admin Role ID")
		return ""
	}
	return role.ID
}
