package repository

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
)

type ProductRepository interface {
	AddProduct(models.Product) (models.Product, error)
	GetProduct(string) (models.Product, error)
	GetProducts() ([]models.Product, error)
	UpdateProduct(models.Product) (models.Product, error)
	DeleteProduct(models.Product) (models.Product, error)
	GetProductsByCategory(id string) ([]models.Product, error)
	GetProductsBySubCategory(string, string) ([]models.Product, error)
}

type productRepository struct {
	connection *gorm.DB
}

func NewProductRepository(db *gorm.DB) ProductRepository {
	return &productRepository{
		connection: db,
	}
}

func (db *productRepository) AddProduct(product models.Product) (models.Product, error) {
	err := db.connection.Create(&product).Error
	if err != nil {
		return models.Product{}, err
	}
	return product, nil
}

func (db *productRepository) GetProduct(id string) (models.Product, error) {
	var product models.Product
	err := db.connection.Where("id = ?", id).First(&product).Error
	if err != nil {
		return models.Product{}, err
	}
	return product, nil
}

func (db *productRepository) GetProducts() ([]models.Product, error) {
	var products []models.Product
	err := db.connection.Find(&products).Error
	if err != nil {
		return nil, err
	}
	return products, nil
}

func (db *productRepository) UpdateProduct(product models.Product) (models.Product, error) {
	err := db.connection.Save(&product).Error
	if err != nil {
		return models.Product{}, err
	}
	return product, nil
}

func (db *productRepository) DeleteProduct(product models.Product) (models.Product, error) {
	err := db.connection.Delete(&product).Error
	if err != nil {
		return models.Product{}, err
	}
	return product, nil
}

func (db *productRepository) GetProductsByCategory(categoryID string) ([]models.Product, error) {
	var products []models.Product
	err := db.connection.Where("category_id = ?", categoryID).Find(&products).Error
	if err != nil {
		return nil, err
	}
	return products, nil
}

func (db *productRepository) GetProductsBySubCategory(categoryID string, subCategoryID string) ([]models.Product, error) {
	var products []models.Product
	err := db.connection.Where("category_id = ? AND sub_category_id = ?", categoryID, subCategoryID).Find(&products).Error
	if err != nil {
		return nil, err
	}
	return products, nil
}
