// const apiUrl = "http://127.0.0.1:8080/api";
const apiUrl = "https://oussama-backend-2r2lfrmw2a-uc.a.run.app/api";

const sendDatatoServer = async (formData, step) => {
  try {
    // Prepare the request payload
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    // Determine the endpoint based on the step
    let endpoint;
    if (step === 4) {
      endpoint = `${apiUrl}/render_qcm`;
    } else if (step === 6) {
      endpoint = `${apiUrl}/render_diagnostic`;
    } else {
      throw new Error("Invalid step value.");
    }

    // Send the POST request to the server
    const response = await fetch(endpoint, payload);

    // Check if the request was successful
    if (response.ok) {
      // Parse the response JSON
      const responseData = await response.json();
      return responseData;
    } else {
      // Handle the error if the request was not successful
      const errorData = await response.json();
      throw new Error(errorData.error || "Unknown error occurred");
    }
  } catch (error) {
    // Handle any unexpected errors
    throw new Error(error.message);
  }
};

export { sendDatatoServer };
