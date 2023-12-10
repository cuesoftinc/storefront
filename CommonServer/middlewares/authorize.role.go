package middlewares

import (
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/gin-gonic/gin"
)

func AuthorizeAdmin(userRepo repository.UserRepository, adminRoleId string) gin.HandlerFunc {
	return func(c *gin.Context) {
		if adminRoleId == "" {
			c.AbortWithStatusJSON(500, gin.H{"error": "Admin Role ID not set"})
			return
		}

		userId, _ := c.Get("jwtUserId")

		user, err := userRepo.GetUser(userId.(string))

		if err != nil {
			c.AbortWithStatusJSON(500, gin.H{"error": "Error getting user"})
			return
		}

		if user.RoleID != adminRoleId {
			c.AbortWithStatusJSON(403, gin.H{"error": "Forbidden"})
			return
		}

		c.Next()

	}
}
