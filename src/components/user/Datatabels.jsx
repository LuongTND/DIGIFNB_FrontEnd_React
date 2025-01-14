import React, { useEffect, useState } from "react";
import axios from "axios";

function Datatables() {
  const [orderData, setOrderData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const API_BASE_URL = "https://digifnbbackendapiv2.azurewebsites.net/api/HistoryDetails";

  const fetchOrderData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/history-without-item?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      setOrderData(response.data.data);
      setTotalRecords(response.data.totalRecords);
    } catch (err) {
      setError("Failed to fetch order data.");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderDetails = async (orderId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/history-details-${orderId}`);
      setSelectedOrder(response.data);
    } catch (err) {
      setError("Failed to fetch order details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [pageNumber, pageSize]);

  const totalPages = Math.ceil(totalRecords / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Quản Lý Đơn Hàng</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <a href="#">Bảng</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <a href="#">Order</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Đơn Hàng</h4>
              </div>
              <div className="card-body">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p className="text-danger">{error}</p>
                ) : (
                  <>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Created Time</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderData.map((order) => (
                            <tr key={order.orderId}>
                              <td>{order.displayOrderId}</td>
                              <td>{order.eaterName || "N/A"}</td>
                              <td>{new Date(order.createdAt).toLocaleString()}</td>
                              <td>{order.eaterAddress}</td>
                              <td>{order.totalDisplay.toLocaleString()} VND</td>
                              <td>{order.state}</td>
                              <td>
                                <button
                                  className="btn btn-info btn-sm"
                                  onClick={() => fetchOrderDetails(order.orderId)}
                                >
                                  Xem Chi Tiết
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <button
                        className="btn btn-primary"
                        disabled={pageNumber === 1}
                        onClick={() => handlePageChange(pageNumber - 1)}
                      >
                        Previous
                      </button>
                      <span>
                        Page {pageNumber} of {totalPages}
                      </span>
                      <button
                        className="btn btn-primary"
                        disabled={pageNumber === totalPages}
                        onClick={() => handlePageChange(pageNumber + 1)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {selectedOrder && (
                  <div className="mt-4">
                    <h5>Chi Tiết Đơn Hàng</h5>
                    <pre>{JSON.stringify(selectedOrder, null, 2)}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datatables;
