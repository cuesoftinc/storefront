package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

type Cart struct {
	ID        string    `gorm:"not null;primaryKey" json:"id"`
	UserID    string    `gorm:"not null" json:"user_id"`
	Products  []Product `gorm:"many2many:cart_products;" json:"products"`
	CreatedAt time.Time `gorm:"not null" json:"created_at"`
	UpdatedAt time.Time `gorm:"not null" json:"updated_at"`
}

func (c *Cart) BeforeCreate(x *gorm.DB) error {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	c.CreatedAt = time.Now()
	c.UpdatedAt = time.Now()
	return nil
}

func (c *Cart) BeforeUpdate(x *gorm.DB) error {
	c.UpdatedAt = time.Now()
	return nil
}

func (c *Cart) TableName() string {
	return "carts"
}
