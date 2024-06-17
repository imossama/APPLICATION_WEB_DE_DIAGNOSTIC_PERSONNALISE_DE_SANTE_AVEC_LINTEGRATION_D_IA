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

    // Send the POST request to the server
    let response;
    if (step === 4) {
      response = await fetch(`${apiUrl}/render_qcm`, payload);
    } else if (step === 6) {
      response = await fetch(`${apiUrl}/render_diagnostic`, payload);
    }

    // Check if the request was successful
    if (response.ok) {
      // Parse the response JSON
      const responseData = await response.json();
      return responseData;
    } else {
      // Handle the error if the request was not successful
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    // Handle any unexpected errors
    throw new Error(error.message);
  }
};

export { sendDatatoServer };
