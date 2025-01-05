// pages/api/subscribe.js
import axios from "axios";

export default async function handler(req, res) {
  const { email } = req.body;

  // Basic email validation
  if (!email || !email.includes("@")) {
    return res.status(400).json({ success: false, message: "Invalid email" });
  }

  const url = "https://api.sendinblue.com/v3/contacts";

  const data = {
    email: email, // The email being added to the list
    listIds: [2], // Your list ID(s) from environment variables
  };

  // Set the headers with the API key for authentication
  const headers = {
    "Content-Type": "application/json",
    "api-key": process.env.BREVO_API_KEY, // Brevo API key from environment variable
  };

  // Make the POST request to create the contact
  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.status);

    // Check if the response is successful
    if (response.status === 200 || response.status === 201) {
      return res
        .status(200)
        .json({ success: true, message: "Subscription successful!" });
    } else {
      return res
        .status(response.status)
        .json({ success: false, message: "Subscription failed" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Subscription failed" });
  }
}
