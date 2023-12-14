import axios from 'axios';

const BASE_URL = 'http://localhost:5005';

const api = axios.create({
  baseURL: BASE_URL,
});

export const addItem = async (addProduct: any) => {
  try {
    const response = await api.post(`${BASE_URL}/api/admin/create`, addProduct);
    return response.data;
  } catch (error) {
    console.log(error)
    // throw error.response?.data || error.message || 'An error occurred';
  }
};
