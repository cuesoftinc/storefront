// import axios from 'axios';

// const BASE_URL = 'http://localhost:5005';
// const token = localStorage.getItem('authToken');

// console.log(token)
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization:  token, 
//   },
// });


// export const addItem = async (addProduct: any) => {
//   try {
//     // if()
//     const response = await api.post(`${BASE_URL}/api/admin/create`, addProduct);
    
    


//     return response.data;
//   } catch (error) {
//     console.log(error)
//     // throw error.response?.data || error.message || 'An error occurred';
//   }
// };
import axios, { AxiosError } from 'axios';

// const BASE_URL = 'http://localhost:5005/';
// const token = localStorage.getItem('authToken');

// console.log(token);

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   withCredentials: true,
// });


// export const addItem = async (addProduct: any) => {
//   try {
//     // Optional additional checks or validations

//     const response = await api.post('/api/admin/create', addProduct);

//     // Process successful response

//     return response.data;
//   } catch (error:any) {
//     console.error(error); // Log detailed error info for debugging

//     if (error.response && error.response.status === 403) {
//       // Handle CORS error specifically
//       alert('Unauthorized access. Please check your credentials.');
//     } else {
//       // Generic error handling
//       alert('An error occurred. Please try again later.');
//     }
//   }
// };
const BASE_URL = 'http://localhost:5005';
const token = localStorage.getItem('authToken');

console.log(token);

export const addItem = async (addProduct: any): Promise<any> => {
  try {
    // Optional additional checks or validations

    const response = await fetch(`${BASE_URL}/api/admin/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addProduct),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Process successful response
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error); // Log detailed error info for debugging

    if (error instanceof TypeError && error.message.includes('NetworkError')) {
      // Handle network error
      alert('Network error. Please check your internet connection.');
    } else {
      // Generic error handling
      alert('An error occurred. Please try again later.');
    }
  }
};