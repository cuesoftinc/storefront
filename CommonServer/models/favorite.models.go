package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

type Favorite struct {
	ID        string    `gorm:"not null;primaryKey" json:"id"`
	UserID    string    `gorm:"not null" json:"user_id"`
	Products  []Product `gorm:"many2many:favorite_products;" json:"products"`
	CreatedAt time.Time `gorm:"not null" json:"created_at"`
	UpdatedAt time.Time `gorm:"not null" json:"updated_at"`
}

func (f *Favorite) BeforeCreate(x *gorm.DB) error {
	if f.ID == "" {
		f.ID = uuid.New().String()
	}
	f.CreatedAt = time.Now()
	f.UpdatedAt = time.Now()
	return nil
}

func (f *Favorite) BeforeUpdate(x *gorm.DB) error {
	f.UpdatedAt = time.Now()
	return nil
}

func (f *Favorite) TableName() string {
	return "favorites"
}
