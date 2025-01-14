import React, { useEffect, useState } from 'react'
import { getOrderhistoryApi } from '../../api/order_history.api';
import axios from 'axios';

function Datatabels() {

  
  const [data, setData] = useState([]);
  const [paused, setPaused] = useState(false); // State để kiểm soát tạm dừng
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const result = await getOrderhistoryApi();
        const result = await axios.get('https://digifnbbackendapi2024.azurewebsites.net/api/DataGrab/get-data-oderhistory');
        console.log("API Data:", result.data); // Log dữ liệu từ API
        setData(result.data);
        setError(null); // Clear error on success
      } catch (error) {
        console.error('Error fetching order history data:', error);
        setError('Failed to fetch order data.');
        setData([]);
      }
    };
  // thay đổi
  if (!paused) {
    fetchData();
    const intervalFetch = setInterval(fetchData, 5000);
    //const intervalPost = setInterval(postCrawlOrders, 240000);

    return () => {
      clearInterval(intervalFetch);
      //clearInterval(intervalPost);
    };
  }
}, [paused]);

   // Hàm toggle để tạm dừng và tiếp tục
   const togglePause = () => setPaused(!paused);

  return (
    <div class="container">
      
          <div class="page-inner">
            <div class="page-header">
              <h3 class="fw-bold mb-3">Quản Lý Đơn Hàng</h3>
              <ul class="breadcrumbs mb-3">
                <li class="nav-home">
                  <a href="#">
                    <i class="icon-home"></i>
                  </a>
                </li>
                <li class="separator">
                  <i class="icon-arrow-right"></i>
                </li>
                <li class="nav-item">
                  <a href="#">Bảng</a>
                </li>
                <li class="separator">
                  <i class="icon-arrow-right"></i>
                </li>
                <li class="nav-item">
                  <a href="#">Order</a>
                </li>
              </ul>
            </div>

            {/* <div style={{ marginBottom: '20px' }}> */}
              {/* Nút tạm dừng / tiếp tục */}
            {/* <button class="btn btn-success" onClick={togglePause}>
                      {paused ? 'Tiếp tục' : 'Tạm dừng'}
                    </button>
            </div> */}
            


         {/* <div>
            <table >
              <thead>
                <tr>
                  <th>Long Order ID</th>
                  <th>Short Order ID</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Created At</th>
                </tr>
              </thead>
            <tbody>
               
                {data && data.length > 0 && data.map((order, index) => (
                  <tr key={index}>
                    <td>{order.longOrderId}</td>
                    <td>{order.shortOrderId}</td>
                    <td>{order.totalAmount.toLocaleString()}</td>
                    <td>{order.status}</td>
                    <td>{order.createdAt}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>  */}


            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Đơn Hàng</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        // id="basic-datatables"
                        class="display table table-striped table-hover"
                      >
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Created Time</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Status</th>

                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Created Time</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>
                        </tfoot>
                        {/* <tbody>
                        {
          data.map((order, index) => (
            <tr key={index}>
              <td>{order.longOrderId}</td>
              <td>{order.shortOrderId}</td>
              <td>{order.totalAmount.toLocaleString()}</td>
              <td>{order.status}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))
        }
                        </tbody> */}
                        
                
                        {/* <tbody>
                          {Array.isArray(data) && data.length > 0 ? (
                            data.map((order, index) => (
                              <tr key={index}>
                                <td>{historyDetail.OrderId}</td>
                                <td>{historyDetail.OrderId}</td>
                                <td>{order.totalAmount.toLocaleString()}</td>
                                <td>{order.status}</td>
                               <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td>{order.createdAt}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="5">No data available</td>
                            </tr>
                          )}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Datatabels
