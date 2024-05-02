const apiUrl = "http://localhost:5000/api";

const sendDatatoServer = async (formData) => {
    try {
        // Prepare the request payload
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        // Send the POST request to the server
        const response = await fetch(`${apiUrl}/receive_json`, payload);

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
