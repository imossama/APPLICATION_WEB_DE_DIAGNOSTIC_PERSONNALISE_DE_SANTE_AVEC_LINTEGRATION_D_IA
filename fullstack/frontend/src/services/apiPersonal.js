const apiUrl = "http://127.0.0.1:8080/api";

// Function to save personal data to the server
export async function savePersonalData(data) {
  try {
    const response = await fetch(`${apiUrl}/create_personal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save personal data. Please try again.");
    }

    const responseData = await response.json();
    // console.log("Personal data saved successfully:", responseData);
    return responseData; // Return the data if needed
  } catch (error) {
    // console.error("Error saving personal data:", error);
    throw error; // Rethrow the error to propagate it further
  }
}

// Function to retrieve personal data from the server by user ID
export async function getPersonalDataById(userId) {
  try {
    const response = await fetch(`${apiUrl}/get_personal/${userId}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch personal data. User ID may not exist.");
    }
  } catch (error) {
    // console.error("Error fetching personal data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
}
