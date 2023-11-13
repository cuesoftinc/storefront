package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

type Product struct {
	ID            string    `gorm:"not null;primaryKey" json:"id"`
	Name          string    `gorm:"not null" json:"name"`
	Description   string    `gorm:"not null" json:"description"`
	CategoryID    string    `gorm:"not null;index" json:"category_id"`
	SubCategoryID string    `gorm:"not null;index" json:"sub_category"`
	Price         float64   `gorm:"not null" json:"price"`
	ShippingInfo  string    `gorm:"not null" json:"shipping_info"`
	Color         string    `gorm:"not null" json:"color"`
	Size          string    `gorm:"default:null" json:"size"`
	Quantity      int       `gorm:"not null" json:"quantity"`
	Image         string    `gorm:"default:null" json:"image"`
	CreatedAt     time.Time `gorm:"not null" json:"created_at"`
	UpdatedAt     time.Time `gorm:"not null" json:"updated_at"`
}

func (p *Product) BeforeCreate(x *gorm.DB) error {
	if p.ID == "" {
		p.ID = uuid.New().String()
	}
	p.CreatedAt = time.Now()
	p.UpdatedAt = time.Now()
	return nil
}

func (p *Product) BeforeUpdate(x *gorm.DB) error {
	p.UpdatedAt = time.Now()
	return nil
}

func (p *Product) TableName() string {
	return "products"
}
