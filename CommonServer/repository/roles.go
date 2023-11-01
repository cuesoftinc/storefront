package repository

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
	"log"
)

type RoleRepository interface {
	GetDefaultRoleID() (uint, error)
	GetAdminRoleID() uint
}

type roleRepository struct {
	connection *gorm.DB
}

func NewRoleRepository(db *gorm.DB) RoleRepository {
	return &roleRepository{
		connection: db,
	}
}

func (db *roleRepository) GetDefaultRoleID() (uint, error) {
	var role models.Role
	result := db.connection.First(&role, "name = ?", "User")
	return role.ID, result.Error
}

func (db *roleRepository) GetAdminRoleID() uint {
	var role models.Role
	result := db.connection.First(&role, "name = ?", "Admin")
	if result.Error != nil {
		log.Println("Error Getting Admin Role ID")
		return 0
	}
	return role.ID
}
