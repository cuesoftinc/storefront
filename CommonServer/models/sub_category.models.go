package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

type SubCategory struct {
	ID          string    `gorm:"not null;primaryKey" json:"id"`
	Name        string    `gorm:"not null;unique" json:"name"`
	Description string    `gorm:"default:null" json:"description"`
	CategoryID  string    `gorm:"not null" json:"category_id"`
	CreatedAt   time.Time `gorm:"not null" json:"created_at"`
	UpdatedAt   time.Time `gorm:"not null" json:"updated_at"`
}

func (s *SubCategory) BeforeCreate(x *gorm.DB) error {
	if s.ID == "" {
		s.ID = uuid.New().String()
	}
	s.CreatedAt = time.Now()
	s.UpdatedAt = time.Now()
	return nil
}

func (s *SubCategory) BeforeUpdate(x *gorm.DB) error {
	s.UpdatedAt = time.Now()
	return nil
}

func (s *SubCategory) TableName() string {
	return "sub_categories"
}
