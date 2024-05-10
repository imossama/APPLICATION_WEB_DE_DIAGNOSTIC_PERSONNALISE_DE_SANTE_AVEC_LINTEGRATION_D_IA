import { setUserIdToLocalStorage } from "./logged_userId";

const apiUrl = "http://localhost:5000/api";

const apiRegister = {
  async checkEmailExists(email) {
    try {
      const response = await fetch(`${apiUrl}/user/email/${email}`);
      if (!response.ok) {
        return null;
      }
      const data = await response.json();
      return data; // If email exists, data will contain information related to it, otherwise it will be empty
    } catch (error) {
      console.error("Error checking email existence:", error);
      throw new Error("An error occurred while checking email existence");
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
      const userId = registeredUserData.user_id; // Assuming the response includes the user_id field

      // console.log(userId);

      setUserIdToLocalStorage(userId); // Store the user ID in local storage

      return registeredUserData;
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error(
        "Une erreur s'est produite lors de l'enregistrement de l'utilisateur"
      );
    }
  },
};

export default apiRegister;
