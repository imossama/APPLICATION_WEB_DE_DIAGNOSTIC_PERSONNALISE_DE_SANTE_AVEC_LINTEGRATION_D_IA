const apiUrl = "http://localhost:5000/api"; // Replace this with your API URL

export const fetchData = async () => {
  try {
    const response = await fetch(`${apiUrl}/diagnoses`);
    if (!response.ok) {
      throw new Error("Échec de la récupération des données");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchDataById = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/diagnosis/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data by ID");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data by ID:", error);
    throw error;
  }
};

export const fetchDataByUserId = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/diagnosis/user/${userId}`);
    if (!response.ok) {
      throw new Error("Échec de la récupération des données par l'ID utilisateur");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data by user ID:", error);
    throw error;
  }
};

export const addData = async (newItem) => {
  try {
    const response = await fetch(`${apiUrl}/create_diagnosis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      throw new Error("Échec de l'ajout de données");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
};

export const deleteDataById = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/diagnosis/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Échec de la suppression des données");
    }
    const data = await response.json();
    console.log("Item deleted:", data);
    return data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

