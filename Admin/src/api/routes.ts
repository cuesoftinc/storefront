// pages/api/routes.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        // Simulate fetching data 
        const dashboardData = await fetchData();

        // Respond with a success message and the fetched data
        res.status(200).json({ success: true, message: 'GET request to /dashboard', data: dashboardData });
      } catch (error) {
        console.error('Error fetching data:', error);

        // Respond with an error message
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// Simulated function to fetch data 
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated data
      resolve({ someData: 'This is some data for the dashboard' });
    }, 1000); // Simulate delay for fetching data
  });
}
