package controllers

import (
	"fmt"
	"github.com/CuesoftCloud/storefront/models"
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
)

type CartController interface {
	CreateNewCart(ctx *gin.Context)
	GetUserCarts(ctx *gin.Context)
	RemoveFromCart(ctx *gin.Context)
}

type CartResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

type cartController struct {
	userRepo repository.UserRepository
	cartRepo repository.CartRepository
}

func NewCartController(db *gorm.DB) CartController {
	return &cartController{
		userRepo: repository.NewUserRepository(db),
		cartRepo: repository.NewCartRepository(db),
	}
}

func (ctrl *cartController) CreateNewCart(ctx *gin.Context) {
	var cart models.Cart
	cart.UserID = ctx.MustGet("jwtUserId").(string)

	if err := ctx.ShouldBindJSON(&cart); err != nil {
		ctx.JSON(http.StatusBadRequest, CartResponse{
			Success: false,
			Message: "Invalid request body",
		})
		fmt.Println(err)
		return
	}

	// Check if user exists
	_, err := ctrl.userRepo.GetUser(cart.UserID)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, CartResponse{
			Success: false,
			Message: "User does not exist",
		})
		return
	}

	// create new cart
	cart, err = ctrl.cartRepo.AddToCart(cart)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, CartResponse{
			Success: false,
			Message: "Failed to create cart",
		})
		return
	}

	ctx.JSON(http.StatusOK, CartResponse{
		Success: true,
		Message: "Cart created successfully",
	})
}

func (ctrl *cartController) GetUserCarts(ctx *gin.Context) {
	var carts models.Cart

	// Check if user exists
	_, err := ctrl.userRepo.GetUser(ctx.MustGet("jwtUserId").(string))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, CartResponse{
			Success: false,
			Message: "User does not exist",
		})
		return
	}

	// get user carts
	carts, err = ctrl.cartRepo.GetCartByUserID(ctx.MustGet("jwtUserId").(string))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, CartResponse{
			Success: false,
			Message: "Failed to get user carts",
		})
		return
	}

	ctx.JSON(http.StatusOK, CartResponse{
		Success: true,
		Message: "User carts retrieved successfully",
		Data:    carts,
	})
}

func (ctrl *cartController) RemoveFromCart(ctx *gin.Context) {
	userId := ctx.MustGet("jwtUserId").(string)
	var productId string = ctx.Param("id")

	// Check if user exists
	_, err := ctrl.userRepo.GetUser(userId)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, CartResponse{
			Success: false,
			Message: "User does not exist",
		})
		return
	}

	// Pass user id and product id to delete from cart
	cart, err := ctrl.cartRepo.DeleteFromCart(userId, productId)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, CartResponse{
			Success: false,
			Message: "Failed to delete from cart",
		})
		return
	}

	ctx.JSON(http.StatusOK, CartResponse{
		Success: true,
		Message: "Product deleted from cart successfully",
		Data:    cart,
	})
}
