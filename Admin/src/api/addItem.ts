// // import axios from 'axios';

// // const BASE_URL = '';
// // const token = localStorage.getItem('authToken');

// // console.log(token)
// // const api = axios.create({
// //   baseURL: BASE_URL,
// //   headers: {
// //     Authorization:  token, 
// //   },
// // });


// // export const addItem = async (addProduct: any) => {
// //   try {
// //     // if()
// //     const response = await api.post(`${BASE_URL}/api/admin/create`, addProduct);
    
    


// //     return response.data;
// //   } catch (error) {
// //     console.log(error)
// //     // throw error.response?.data || error.message || 'An error occurred';
// //   }
// // };


import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Get the token from localStorage or wherever you store it
    const token = localStorage.getItem('authToken');

    // Check if the token exists
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const apiResponse = await axios.post('http://localhost:5005', req.body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // If successful, send the response from your API
      return res.status(apiResponse.status).json(apiResponse.data);
    } catch (error: any) {
      // If there's an error, handle it
      console.error('Error:', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return res.status(error.response.status).json(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        return res.status(500).json({ error: 'No response received' });
      } else {
        // Something happened in setting up the request that triggered an Error
        return res.status(500).json({ error: 'Error setting up the request' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
