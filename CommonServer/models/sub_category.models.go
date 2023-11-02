package models

import "gorm.io/gorm"

type SubCategory struct {
	gorm.Model
	Name        string `gorm:"not null" json:"name"`
	Description string `gorm:"default:null" json:"description"`
	CategoryID  uint   `gorm:"not null"`
}

func (s *SubCategory) TableName() string {
	return "sub_categories"
}
