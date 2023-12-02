package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

type Category struct {
	ID            string        `gorm:"not null;primaryKey" json:"id"`
	Name          string        `gorm:"not null;unique" json:"name"`
	Description   string        `gorm:"default:null" json:"description"`
	SubCategories []SubCategory `gorm:"foreignKey:CategoryID"`
	CreatedAt     time.Time     `gorm:"not null" json:"created_at"`
	UpdatedAt     time.Time     `gorm:"not null" json:"updated_at"`
}

func (c *Category) BeforeCreate(x *gorm.DB) error {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	c.CreatedAt = time.Now()
	c.UpdatedAt = time.Now()
	return nil
}

func (c *Category) BeforeUpdate(x *gorm.DB) error {
	c.UpdatedAt = time.Now()
	return nil
}

func (c *Category) TableName() string {
	return "categories"
}
