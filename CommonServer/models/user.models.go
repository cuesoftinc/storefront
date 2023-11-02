package models

import (
	"gorm.io/gorm"
)

// User is the model for the user table
type User struct {
	gorm.Model
	Name     string `gorm:"not null" json:"name"`
	Email    string `gorm:"unique;not null;index" json:"email"`
	Password string `gorm:"not null" json:"password"`
	RoleID   uint   `gorm:"not null" json:"role_id"`
}

// TableName returns the name of the table for the user model
func (u *User) TableName() string {
	return "users"
}
