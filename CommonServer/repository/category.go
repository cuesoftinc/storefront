package repository

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
)

type CategoryRepository interface {
	AddCategory(models.Category) (models.Category, error)
	AddSubCategory(models.SubCategory) (models.SubCategory, error)
	GetCategory(uint) (models.Category, error)
	GetCategories() []models.Category
	GetSubCategories() []models.SubCategory
}

type categoryRepository struct {
	connection *gorm.DB
}

func NewCategoryRepository(db *gorm.DB) CategoryRepository {
	return &categoryRepository{
		connection: db,
	}
}

func (db *categoryRepository) AddCategory(category models.Category) (models.Category, error) {
	err := db.connection.Create(&category).Error
	if err != nil {
		return models.Category{}, err
	}
	return category, nil
}

func (db *categoryRepository) AddSubCategory(subCategory models.SubCategory) (models.SubCategory, error) {
	err := db.connection.Create(&subCategory).Error
	if err != nil {
		return models.SubCategory{}, err
	}
	return subCategory, nil
}

func (db *categoryRepository) GetCategory(id uint) (models.Category, error) {
	var category models.Category
	err := db.connection.First(&category, id).Error
	if err != nil {
		return models.Category{}, err
	}
	return category, nil
}

func (db *categoryRepository) GetCategories() []models.Category {
	var categories []models.Category
	err := db.connection.Preload("SubCategories").Find(&categories).Error
	if err != nil {
		return nil
	}
	return categories
}

func (db *categoryRepository) GetSubCategories() []models.SubCategory {
	var subCategories []models.SubCategory
	err := db.connection.Find(&subCategories).Error
	if err != nil {
		return nil
	}
	return subCategories
}
