package middlewares

import (
	"github.com/CuesoftCloud/storefront/repository"
	"github.com/gin-gonic/gin"
)

func AuthorizeAdmin(userRepo repository.UserRepository, adminRoleId uint) gin.HandlerFunc {
	return func(c *gin.Context) {
		if adminRoleId == 0 {
			c.AbortWithStatusJSON(500, gin.H{"error": "Admin Role ID not set"})
			return
		}

		if userEmail, _ := c.Get("jwtEmail"); userEmail == 0 {
			c.AbortWithStatusJSON(500, gin.H{"error": "User not set"})
			return
		} else {
			user, err := userRepo.GetUserByEmail(userEmail.(string))
			if err != nil {
				c.AbortWithStatusJSON(500, gin.H{"error": "Error getting user"})
				return
			}
			if user.RoleID != adminRoleId {
				c.AbortWithStatusJSON(401, gin.H{"error": "Unauthorized"})
				return
			}
		}

		c.Next()

	}
}
