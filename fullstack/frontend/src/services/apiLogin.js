const apiUrl = "http://127.0.0.1:8080/api";

const apiLogin = {
  async getUsers() {
    try {
      const response = await fetch(`${apiUrl}/users`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();
      return users;
    } catch (error) {
      // console.error("Error fetching users:", error);
      throw error;
    }
  },

  async getUser(userId) {
    try {
      const response = await fetch(`${apiUrl}/user/id/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      // console.error("Error fetching user data:", error);
      throw error;
    }
  },

  async updateUser(userId, userData) {
    try {
      const response = await fetch(`${apiUrl}/update_user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      const updatedUser = await response.json();
      return updatedUser;
    } catch (error) {
      // console.error("Error updating user data:", error);
      throw error;
    }
  },

  async validateOldPassword(userId, oldPassword) {
    try {
      const user = await this.getUser(userId);
      if (user && user.password === oldPassword) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      // console.error("Error validating old password:", error);
      throw error;
    }
  },

  async login(email, password) {
    try {
      const users = await this.getUsers();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      return user;
    } catch (error) {
      // console.error("Error logging in:", error);
      throw error;
    }
  },

  async deleteUser(userId) {
    try {
      const response = await fetch(`${apiUrl}/delete_user/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      const deletedUser = await response.json();
      return deletedUser;
    } catch (error) {
      // console.error("Error deleting user:", error);
      throw error;
    }
  },
};

export default apiLogin;
