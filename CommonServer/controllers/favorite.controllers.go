package controllers

import (
	"github.com/CuesoftCloud/storefront/models"
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
)

type FavoriteController interface {
	CreateNewFavorite(ctx *gin.Context)
	GetUserFavorites(ctx *gin.Context)
	RemoveFromFavorite(ctx *gin.Context)
}

type FavoriteResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

type favoriteController struct {
	userRepo     repository.UserRepository
	favoriteRepo repository.FavoriteRepository
}

func NewFavoriteController(db *gorm.DB) FavoriteController {
	return &favoriteController{
		userRepo:     repository.NewUserRepository(db),
		favoriteRepo: repository.NewFavoriteRepository(db),
	}
}

func (ctrl *favoriteController) CreateNewFavorite(ctx *gin.Context) {
	var favorite models.Favorite
	favorite.UserID = ctx.MustGet("jwtUserId").(string)

	if err := ctx.ShouldBindJSON(&favorite); err != nil {
		ctx.JSON(http.StatusBadRequest, FavoriteResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	// Check if user exists
	_, err := ctrl.userRepo.GetUser(favorite.UserID)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, FavoriteResponse{
			Success: false,
			Message: "User does not exist",
		})
		return
	}

	// create new favorite
	favorite, err = ctrl.favoriteRepo.AddToFavorites(favorite)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, FavoriteResponse{
			Success: false,
			Message: "Failed to create favorite",
		})
		return
	}

	ctx.JSON(http.StatusOK, FavoriteResponse{
		Success: true,
		Message: "Favorite created successfully",
	})
}

func (ctrl *favoriteController) GetUserFavorites(ctx *gin.Context) {
	var favorites models.Favorite
	userId := ctx.MustGet("jwtUserId").(string)

	// Check if user exists
	_, err := ctrl.userRepo.GetUser(userId)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, FavoriteResponse{
			Success: false,
			Message: "User does not exist",
		})
		return
	}

	favorites, err = ctrl.favoriteRepo.GetFavoriteByUserID(userId)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, FavoriteResponse{
			Success: false,
			Message: "Failed to get favorites",
		})
		return
	}

	ctx.JSON(http.StatusOK, FavoriteResponse{
		Success: true,
		Message: "Favorites retrieved successfully",
		Data:    favorites,
	})
}

func (ctrl *favoriteController) RemoveFromFavorite(ctx *gin.Context) {
	userId := ctx.MustGet("jwtUserId").(string)
	var productId string = ctx.Param("id")

	// Check if user exists
	_, err := ctrl.userRepo.GetUser(userId)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, FavoriteResponse{
			Success: false,
			Message: "User does not exist",
		})
		return
	}

	// Pass user id and product id to delete from favorite
	favorite, err := ctrl.favoriteRepo.DeleteFromFavorites(userId, productId)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, FavoriteResponse{
			Success: false,
			Message: "Failed to remove from favorite",
		})
		return
	}

	ctx.JSON(http.StatusOK, FavoriteResponse{
		Success: true,
		Message: "Removed from favorite successfully",
		Data:    favorite,
	})
}
