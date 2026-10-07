import axios from "axios";
import { getFriendlyErrorMessage } from "../utils/errorMessages";

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export async function authenticateUser(email, password, setErrorMessage) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      },
    );

    if (!response) {
      return;
    }

    return response.data;
  } catch (err) {
    console.log("FULL FIREBASE ERROR:", err.response.data.error.message);
    setErrorMessage(
      getFriendlyErrorMessage(err.response.data.error.message, "login"),
    );
  }
}

export async function registerUser(email, password, setErrorMessage) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      },
    );

    if (!response) {
      return;
    }
    return response.data;
  } catch (err) {
    console.log("FULL FIREBASE ERROR:", err.response?.data);
    setErrorMessage(
      getFriendlyErrorMessage(err.response?.data.message, "signup"),
    );
  }
}
