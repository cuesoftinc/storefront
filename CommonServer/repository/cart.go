package repository

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
)

type CartRepository interface {
	AddToCart(models.Cart) (models.Cart, error)
	GetCart(id string) (models.Cart, error)
	GetCarts() ([]models.Cart, error)
	UpdateCart(models.Cart) (models.Cart, error)
	DeleteCart(models.Cart) (models.Cart, error)
	DeleteFromCart(userId, productId string) (models.Cart, error)
	GetCartByUserID(id string) (models.Cart, error)
}

type cartRepository struct {
	connection *gorm.DB
}

func NewCartRepository(db *gorm.DB) CartRepository {
	return &cartRepository{
		connection: db,
	}
}

func (db *cartRepository) AddToCart(cart models.Cart) (models.Cart, error) {
	err := db.connection.Create(&cart).Error
	if err != nil {
		return models.Cart{}, err
	}
	return cart, nil
}

func (db *cartRepository) GetCart(id string) (models.Cart, error) {
	var cart models.Cart
	err := db.connection.Where("id = ?", id).First(&cart).Error
	if err != nil {
		return models.Cart{}, err
	}
	return cart, nil
}

func (db *cartRepository) GetCarts() ([]models.Cart, error) {
	var carts []models.Cart
	err := db.connection.Find(&carts).Error
	if err != nil {
		return nil, err
	}
	return carts, nil
}

func (db *cartRepository) UpdateCart(cart models.Cart) (models.Cart, error) {
	err := db.connection.Save(&cart).Error
	if err != nil {
		return models.Cart{}, err
	}
	return cart, nil
}

func (db *cartRepository) DeleteCart(cart models.Cart) (models.Cart, error) {
	err := db.connection.Delete(&cart).Error
	if err != nil {
		return models.Cart{}, err
	}
	return cart, nil
}

func (db *cartRepository) GetCartByUserID(id string) (models.Cart, error) {
	var cart models.Cart
	err := db.connection.Preload("Products").Where("user_id = ?", id).First(&cart).Error
	if err != nil {
		return models.Cart{}, err
	}
	return cart, nil
}

func (db *cartRepository) DeleteFromCart(userId, productId string) (models.Cart, error) {
	var cart models.Cart
	err := db.connection.Preload("Products").Where("user_id = ?", userId).First(&cart).Error
	if err != nil {
		return models.Cart{}, err
	}
	for i, product := range cart.Products {
		if product.ID == productId {
			cart.Products = append(cart.Products[:i], cart.Products[i+1:]...)
			break
		}
	}
	err = db.connection.Save(&cart).Error
	if err != nil {
		return models.Cart{}, err
	}
	return cart, nil
}
