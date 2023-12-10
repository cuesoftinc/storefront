package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

// User is the model for the user table
type User struct {
	ID        string    `gorm:"not null;primaryKey" json:"id"`
	Name      string    `gorm:"not null" json:"name"`
	Email     string    `gorm:"unique;not null;index" json:"email"`
	Password  string    `gorm:"not null" json:"password"`
	RoleID    string    `gorm:"not null" json:"role_id"`
	CreatedAt time.Time `gorm:"not null" json:"created_at"`
	UpdatedAt time.Time `gorm:"not null" json:"updated_at"`
}

// BeforeCreate is a hook that is triggered before creating a new user
func (u *User) BeforeCreate(x *gorm.DB) error {
	if u.ID == "" {
		u.ID = uuid.New().String()
	}
	u.CreatedAt = time.Now()
	u.UpdatedAt = time.Now()
	return nil
}

// BeforeUpdate is a hook that is triggered before updating a user
func (u *User) BeforeUpdate(x *gorm.DB) error {
	u.UpdatedAt = time.Now()
	return nil
}

// TableName returns the name of the table for the user model
func (u *User) TableName() string {
	return "users"
}
