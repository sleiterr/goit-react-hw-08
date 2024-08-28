import axios from "axios";

const API_URL = "https://66b8e1ef3ce57325ac7864b0.mockapi.io/";

// Функція для отримання контактів
export const fetchContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    throw error;
  }
};
