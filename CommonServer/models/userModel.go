package models

import (
	"gorm.io/gorm"
)

// User is the model for the user table
type User struct {
	gorm.Model
	Name     string `gorm:"not null" json:"name"`
	Email    string `gorm:"unique;not null" json:"email"`
	Password string `gorm:"not null" json:"password"`
}

// TableName returns the name of the table for the user model
func (u *User) TableName() string {
	return "users"
}
