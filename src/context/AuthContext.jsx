import { useState } from "react";
import { authenticateUser, registerUser } from "../api/auth";
import { fetchData, postData } from "../api/data";
import { AuthContext } from "./useAuthData";
import { getFriendlyErrorMessage } from "../utils/errorMessages";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password, setAuthenticateError) => {
    setError(null);
    setLoading(true);
    try {
      const response = await authenticateUser(
        email,
        password,
        setAuthenticateError,
      );
      const uid = response.localId;

      const users = await fetchData("users", response.idToken, setError);
      const userProfile = users.find((u) => u.id === uid);
      if (!userProfile) throw new Error("User data not found");
      const userData = { ...userProfile, idToken: response.idToken };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (err) {
      setError(getFriendlyErrorMessage(err, "login"));
      console.log("ERROR FROM LOGIN FUNCTION", err.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email, password, name) => {
    setError(null);
    setLoading(true);
    try {
      const users = await fetchData("users", undefined, setError);
      const ownerExists = users.some((u) => u.role === "owner");

      if (ownerExists) {
        setLoading(false);
        return;
      }

      const response = await registerUser(email, password, setError);
      const uid = response.localId;
      const userData = {
        id: uid,
        name,
        email,
        role: "owner",
        idToken: response.idToken,
        createdAt: new Date().toISOString(),
      };

      await postData(userData, "users");
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return userData;
    } catch (err) {
      setError(getFriendlyErrorMessage(err, "signup"));
      console.log("ERROR FROM SIGNUP FUNCTION", err.message);
    } finally {
      setLoading(false);
    }
  };

  const registerWorker = async (
    email,
    password,
    name,
    branchId,
    role = "worker",
    phoneNumber,
  ) => {
    setError(null);
    try {
      const response = await registerUser(email, password);
      const uid = response.localId;
      const userData = {
        id: uid,
        name,
        email,
        role,
        branchId,
        phoneNumber,
        createdAt: new Date().toISOString(),
      };

      await postData(userData, "users");
      return userData;
    } catch (err) {
      setError(getFriendlyErrorMessage(err, "signup"));
      console.log("ERROR FROM REGISTER USER FUNCTION", err.message);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    loading,
    error,
    login,
    signUp,
    registerWorker,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
