

import axios from 'axios';

export const getOrderhistoryApi = async () => {
  try {
    const response = await axios.get('https://localhost:7182/api/DataGrab/get-data-oderhistory');
    return response.data;  // return dữ liệu từ API
  } catch (error) {
    console.error('Error fetching order history data:', error);
    throw error;
  }
};