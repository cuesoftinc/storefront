package repository

import (
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
)

type FavoriteRepository interface {
	AddToFavorites(models.Favorite) (models.Favorite, error)
	GetFavorite(id string) (models.Favorite, error)
	GetFavorites() ([]models.Favorite, error)
	UpdateFavorite(models.Favorite) (models.Favorite, error)
	DeleteFromFavorites(userId, productId string) (models.Favorite, error)
	DeleteFavorite(models.Favorite) (models.Favorite, error)
	GetFavoriteByUserID(id string) (models.Favorite, error)
}

type favoriteRepository struct {
	connection *gorm.DB
}

func NewFavoriteRepository(db *gorm.DB) FavoriteRepository {
	return &favoriteRepository{
		connection: db,
	}
}

func (db *favoriteRepository) AddToFavorites(favorite models.Favorite) (models.Favorite, error) {
	err := db.connection.Create(&favorite).Error
	if err != nil {
		return models.Favorite{}, err
	}
	return favorite, nil
}

func (db *favoriteRepository) GetFavorite(id string) (models.Favorite, error) {
	var favorite models.Favorite
	err := db.connection.Where("id = ?", id).First(&favorite).Error
	if err != nil {
		return models.Favorite{}, err
	}
	return favorite, nil
}

func (db *favoriteRepository) GetFavorites() ([]models.Favorite, error) {
	var favorites []models.Favorite
	err := db.connection.Find(&favorites).Error
	if err != nil {
		return nil, err
	}
	return favorites, nil
}

func (db *favoriteRepository) UpdateFavorite(favorite models.Favorite) (models.Favorite, error) {
	err := db.connection.Save(&favorite).Error
	if err != nil {
		return models.Favorite{}, err
	}
	return favorite, nil
}

func (db *favoriteRepository) DeleteFavorite(favorite models.Favorite) (models.Favorite, error) {
	err := db.connection.Delete(&favorite).Error
	if err != nil {
		return models.Favorite{}, err
	}
	return favorite, nil
}

func (db *favoriteRepository) GetFavoriteByUserID(id string) (models.Favorite, error) {
	var favorite models.Favorite
	err := db.connection.Preload("Products").Where("user_id = ?", id).First(&favorite).Error
	if err != nil {
		return models.Favorite{}, err
	}
	return favorite, nil
}

func (db *favoriteRepository) DeleteFromFavorites(userId, productId string) (models.Favorite, error) {
	var favorite models.Favorite
	err := db.connection.Where("user_id = ?", userId).First(&favorite).Error
	if err != nil {
		return models.Favorite{}, err
	}
	err = db.connection.Model(&favorite).Association("Products").Delete(productId)
	if err != nil {
		return models.Favorite{}, err
	}
	return favorite, nil
}
