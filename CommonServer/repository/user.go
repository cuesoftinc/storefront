package repository

import (
	"github.com/CuesoftCloud/storefront/config"
	"github.com/CuesoftCloud/storefront/models"
	"gorm.io/gorm"
)

type UserRepository interface {
	AddUser(models.User) (models.User, error)
	GetUser(int) (models.User, error)
	GetUsers() ([]models.User, error)
	UpdateUser(models.User) (models.User, error)
	DeleteUser(models.User) (models.User, error)
	GetUserByEmail(string) (models.User, error)
}

type userRepository struct {
	connection *gorm.DB
}

func NewUserRepository() UserRepository {
	return &userRepository{
		connection: config.ConnectDB(),
	}
}

func (db *userRepository) GetUser(id int) (models.User, error) {
	var user models.User
	result := db.connection.First(&user, id)
	return user, result.Error
}

func (db *userRepository) GetUsers() ([]models.User, error) {
	var users []models.User
	result := db.connection.Find(&users)
	return users, result.Error
}

func (db *userRepository) AddUser(user models.User) (models.User, error) {
	result := db.connection.Create(&user)
	return user, result.Error
}

func (db *userRepository) UpdateUser(user models.User) (models.User, error) {
	if err := db.connection.First(&user, user.ID).Error; err != nil {
		return user, err
	}
	return user, db.connection.Model(&user).Updates(user).Error
}

func (db *userRepository) DeleteUser(user models.User) (models.User, error) {
	if err := db.connection.First(&user, user.ID).Error; err != nil {
		return user, err
	}
	return user, db.connection.Delete(&user).Error
}

func (db *userRepository) GetUserByEmail(email string) (models.User, error) {
	var user models.User
	result := db.connection.Where("email = ?", email).First(&user)
	return user, result.Error
}
