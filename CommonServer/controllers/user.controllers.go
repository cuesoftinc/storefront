package controllers

import (
	"github.com/CuesoftCloud/storefront/models"
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/CuesoftCloud/storefront/utils"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"log"
	"net/http"
	"strconv"
)

type UserController interface {
	ControllerRegister(*gin.Context)
	GetUsers(*gin.Context)
	UpdateUser(*gin.Context)
	DeleteUser(*gin.Context)
	ControllerLogin(*gin.Context)
}

type UserResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

type LoginResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Token   string `json:"token,omitempty"`
}

type userController struct {
	userRepo repository.UserRepository
	roleRepo repository.RoleRepository
}

func NewUserController(db *gorm.DB) UserController {
	return &userController{
		userRepo: repository.NewUserRepository(db),
		roleRepo: repository.NewRoleRepository(db),
	}
}

func hashPassword(password *string) {
	bytePassword := []byte(*password)
	hashedPassword, _ := bcrypt.GenerateFromPassword(bytePassword, bcrypt.DefaultCost)
	*password = string(hashedPassword)
}
func comparePassword(hashedPassword string, password string) bool {
	byteHashedPassword := []byte(hashedPassword)
	bytePassword := []byte(password)
	err := bcrypt.CompareHashAndPassword(byteHashedPassword, bytePassword)
	if err != nil {
		return false
	}
	return true
}

func (u *userController) ControllerRegister(c *gin.Context) {
	var user models.User

	if err := c.ShouldBindJSON(&user); err != nil {
		log.Println(err)
		c.JSON(http.StatusBadRequest, UserResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	// Check if email already exists
	_, err := u.userRepo.GetUserByEmail(user.Email)
	if err == nil {
		log.Println(err)
		c.JSON(http.StatusBadRequest, UserResponse{
			Success: false,
			Message: "Email already exists",
		})
		return
	}

	hashPassword(&user.Password)
	user.RoleID, err = u.roleRepo.GetDefaultRoleID()
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, UserResponse{
			Success: false,
			Message: "Error retrieving default role",
		})
		return
	}
	user, err = u.userRepo.AddUser(user)
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, UserResponse{
			Success: false,
			Message: "Error creating user",
		})
		return
	}
	user.Password = ""
	c.JSON(http.StatusCreated, UserResponse{
		Success: true,
		Message: "User created successfully",
		Data:    user,
	})
}

func (u *userController) GetUsers(c *gin.Context) {
	users, err := u.userRepo.GetUsers()

	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, UserResponse{
			Success: false,
			Message: "Error retrieving all users",
		})
		return
	}

	for i := range users {
		users[i].Password = ""
	}
	c.JSON(http.StatusOK, UserResponse{
		Success: true,
		Message: "Users retrieved successfully",
		Data:    users,
	})
}

func (u *userController) UpdateUser(c *gin.Context) {
	var user models.User

	if err := c.ShouldBindJSON(&user); err != nil {
		log.Println(err)
		c.JSON(http.StatusBadRequest, UserResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	id := c.Param("id")
	intID, err := strconv.Atoi(id)

	if err != nil {
		log.Println(err)
		c.JSON(http.StatusBadRequest, UserResponse{
			Success: false,
			Message: "Invalid user ID",
		})
		return
	}

	user.ID = uint(intID)
	user, err = u.userRepo.UpdateUser(user)

	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, UserResponse{
			Success: false,
			Message: "Error updating user",
		})
		return
	}

	user.Password = ""
	c.JSON(http.StatusOK, UserResponse{
		Success: true,
		Message: "User updated successfully",
		Data:    user,
	})
}

func (u *userController) DeleteUser(c *gin.Context) {
	var user models.User

	if err := c.ShouldBindJSON(&user); err != nil {
		log.Println(err)
		c.JSON(http.StatusBadRequest, UserResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	id := c.Param("id")
	intID, err := strconv.Atoi(id)

	if err != nil {
		log.Println(err)
		c.JSON(http.StatusBadRequest, UserResponse{
			Success: false,
			Message: "Invalid user ID",
		})
		return
	}

	user.ID = uint(intID)
	user, err = u.userRepo.DeleteUser(user)

	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, UserResponse{
			Success: false,
			Message: "Error deleting user",
		})
		return
	}

	user.Password = ""
	c.JSON(http.StatusOK, UserResponse{
		Success: true,
		Message: "User deleted successfully",
		Data:    user,
	})
}

func (u *userController) ControllerLogin(c *gin.Context) {
	var user models.User
	var dbUser models.User

	if err := c.ShouldBindJSON(&user); err != nil {
		log.Println(err)
		c.JSON(http.StatusBadRequest, LoginResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}
	dbUser, err := u.userRepo.GetUserByEmail(user.Email)
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, LoginResponse{
			Success: false,
			Message: "Error retrieving user",
		})

		return
	}
	if !comparePassword(dbUser.Password, user.Password) {
		c.JSON(http.StatusUnauthorized, LoginResponse{
			Success: false,
			Message: "Invalid login credentials",
		})
		return
	}

	isTrue := comparePassword(dbUser.Password, user.Password)

	if isTrue {
		token := utils.GenerateToken(dbUser.ID, dbUser.Email)
		c.JSON(http.StatusOK, LoginResponse{
			Success: true,
			Message: "Login successful",
			Token:   token,
		})
		return
	} else {
		c.JSON(http.StatusUnauthorized, LoginResponse{
			Success: false,
			Message: "Invalid Email or Password",
		})
		return
	}
}
