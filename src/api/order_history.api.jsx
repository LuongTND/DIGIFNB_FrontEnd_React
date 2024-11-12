

// import axios from 'axios';

// export const getOrderhistoryApi = async () => {
//   try {
//     // const response = await axios.get('http://digifnbv1.runasp.net/api/DataGrab/get-data-oderhistory');
//     const response = await axios.get('/api/DataGrab/get-data-oderhistory');
//     return response.data;  // return dữ liệu từ API
//   } catch (error) {
//     // console.error('Error fetching order history data:', error);
//     throw error;
//   }
// };
//const response = await axios.get('https://localhost:7182/api/DataGrab/get-data-oderhistory');

import axios from 'axios';

export const getOrderhistoryApi = async () => {
  try {
    const response = await axios.get('/api/DataGrab/get-data-oderhistory', {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
