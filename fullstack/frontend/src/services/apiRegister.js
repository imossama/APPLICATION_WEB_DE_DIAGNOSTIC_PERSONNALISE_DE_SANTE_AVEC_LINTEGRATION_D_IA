import { setUserIdToLocalStorage } from "./logged_userId";

const apiUrl = "http://localhost:5000/api";

const apiRegister = {
  async checkEmailExists(email) {
    try {
      const response = await fetch(`${apiUrl}/user/${email}`);
      if (!response.ok) {
        throw new Error("Échec de la vérification de l'existence des e-mails");
      }
      const users = await response.json();
      return users.length > 0;
    } catch (error) {
      console.error("Error checking email existence:", error);
      throw new Error("Une erreur s'est produite lors de la vérification de l'existence des e-mails");
    }
  },

  async register(userData) {
    try {
      const response = await fetch(`${apiUrl}/create_user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Échec de l'enregistrement de l'utilisateur");
      }

      const registeredUserData = await response.json();
      const userId = registeredUserData.id;

      setUserIdToLocalStorage(userId);

      return registeredUserData;
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error("Une erreur s'est produite lors de l'enregistrement de l'utilisateur");
    }
  },
};

export default apiRegister;