package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

type Role struct {
	ID        string    `gorm:"not null;primaryKey" json:"id"`
	Name      string    `gorm:"not null;unique" json:"name"`
	CreatedAt time.Time `gorm:"not null" json:"created_at"`
	UpdatedAt time.Time `gorm:"not null" json:"updated_at"`
}

func (r *Role) BeforeCreate(x *gorm.DB) error {
	if r.ID == "" {
		r.ID = uuid.New().String()
	}
	r.CreatedAt = time.Now()
	r.UpdatedAt = time.Now()
	return nil
}

func (r *Role) BeforeUpdate(x *gorm.DB) error {
	r.UpdatedAt = time.Now()
	return nil
}

func (r *Role) TableName() string {
	return "roles"
}
