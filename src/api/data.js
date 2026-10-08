import axios from "axios";
import { getFriendlyErrorMessage } from "../utils/errorMessages";

const DATABASE_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL;

export const postData = (data, endPoint) => {
  return axios.post(`${DATABASE_URL}/${endPoint}.json`, data);
};

export const fetchData = async (endPoint, idToken, setErrorMessage) => {
  if (setErrorMessage) setErrorMessage("");
  try {
    const authQuery = idToken ? `?auth=${encodeURIComponent(idToken)}` : "";
    const response = await axios.get(
      `${DATABASE_URL}/${endPoint}.json${authQuery}`,
    );
    const data = response.data || {};
    const appData = [];
    for (const key in data) {
      const product = {
        id: key,
        ...data[key],
      };
      appData.push(product);
    }
    return appData;
  } catch (error) {
    const message = getFriendlyErrorMessage(error, "fetch");
    if (setErrorMessage) setErrorMessage(message);
    throw error;
  }
};
export const updateData = (endPoint, id, updatedData) => {
  return axios.patch(`${DATABASE_URL}/${endPoint}/${id}.json`, updatedData);
};

export const deleteData = (endPoint, id) => {
  return axios.delete(`${DATABASE_URL}/${endPoint}/${id}.json`);
};
