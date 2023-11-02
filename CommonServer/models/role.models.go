package models

import "gorm.io/gorm"

type Role struct {
	gorm.Model
	Name string `gorm:"not null" json:"name"`
}

func (r *Role) TableName() string {
	return "roles"
}
