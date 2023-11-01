package repository

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
)

type ProductRepository interface {
	AddProduct(models.Product) (models.Product, error)
	GetProduct(int) (models.Product, error)
	GetProducts() ([]models.Product, error)
	UpdateProduct(models.Product) (models.Product, error)
	DeleteProduct(models.Product) (models.Product, error)
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

func (db *productRepository) GetProduct(id int) (models.Product, error) {
	var product models.Product
	err := db.connection.First(&product, id).Error
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
