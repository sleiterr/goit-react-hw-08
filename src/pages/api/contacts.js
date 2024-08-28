import axios from "axios";

const API_URL = "https://connections-api.goit.global/";

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
