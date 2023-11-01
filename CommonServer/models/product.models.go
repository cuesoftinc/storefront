package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Name          string  `gorm:"not null" json:"name"`
	Description   string  `gorm:"not null" json:"description"`
	CategoryID    uint    `gorm:"not null;index" json:"category_id"`
	SubCategoryID uint    `gorm:"not null;index" json:"sub_category"`
	Price         float64 `gorm:"not null" json:"price"`
	ShippingInfo  string  `gorm:"not null" json:"shipping_info"`
	Color         string  `gorm:"not null" json:"color"`
	Size          string  `gorm:"default:null" json:"size"`
	Quantity      int     `gorm:"not null" json:"quantity"`
	Image         string  `gorm:"not null" json:"image"`
}

func (p *Product) TableName() string {
	return "products"
}
