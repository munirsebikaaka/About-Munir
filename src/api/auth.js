import axios from "axios";
import { getFriendlyErrorMessage } from "../utils/errorMessages";

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export const authenticateUser = async (email, password, setErrorMessage) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        email: email.trim(),
        password: password.trim(),
        returnSecureToken: true,
      },
    );
    return response.data;
  } catch (err) {
    setErrorMessage(getFriendlyErrorMessage(err, "login"));
    console.log("ERROR FROM THE AUTHENTICATEUSER FUNCTION", err.message);
  }
};

export const registerUser = async (email, password, setErrorMessage) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email: email.trim(),
        password: password.trim(),
        returnSecureToken: true,
      },
    );
    return response.data;
  } catch (err) {
    setErrorMessage(getFriendlyErrorMessage(err, "signup"));
    console.log("ERROR FROM THE REGISTERUSER FUNCTION", err.message);
  }
};
