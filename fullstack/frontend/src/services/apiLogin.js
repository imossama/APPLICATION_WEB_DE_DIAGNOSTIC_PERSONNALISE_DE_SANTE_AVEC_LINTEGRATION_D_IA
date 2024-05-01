const apiUrl = "http://localhost:5000/api";

const apiLogin = {
  async getUsers() {
    try {
      const response = await fetch(`${apiUrl}/users`);
      if (!response.ok) {
        throw new Error("Échec de l'emploi des utilisateurs");
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  async login(email, password) {
    try {
      const users = await this.getUsers();
      const user = users.find(
        (user) => user.email == email && user.password == password
      );
      return user;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  },
};

export default apiLogin;
