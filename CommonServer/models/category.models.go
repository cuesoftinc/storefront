package models

import "gorm.io/gorm"

type Category struct {
	gorm.Model
	Name          string        `gorm:"not null" json:"name"`
	Description   string        `gorm:"default:null" json:"description"`
	SubCategories []SubCategory `gorm:"foreignKey:CategoryID"`
}

func (c *Category) TableName() string {
	return "categories"
}
