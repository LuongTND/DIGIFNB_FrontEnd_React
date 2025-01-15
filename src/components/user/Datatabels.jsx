


import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datatables() {
  const [orderData1, setOrderData1] = useState([]);
  const [orderData2, setOrderData2] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalRecords2, setTotalRecords2] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber2, setPageNumber2] = useState(1);
  const [pageSize2, setPageSize2] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [salesReport, setSalesReport] = useState(null);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportError, setReportError] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const API_BASE_URL1 = "https://digifnbbackendapiv2.azurewebsites.net/api/HistoryDetails/history-without-item";
  const API_BASE_URL2 = "https://digifnbbackendapiv2.azurewebsites.net/api/PreparingDetails/preparing-without-item";
  const REPORT_API_URL = "https://digifnbbackendapiv2.azurewebsites.net/api/HistoryDetails/Report-Businessv2";

  const fetchOrderData1 = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_BASE_URL1}?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      setOrderData1(response.data.data);
      setTotalRecords(response.data.totalRecords);
    } catch (err) {
      setError("Failed to fetch order data.");
    } finally {
      setLoading(false);
    }
  };
  const fetchOrderData2 = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_BASE_URL2}?pageNumber=${pageNumber2}&pageSize=${pageSize2}`
      );
      setOrderData2(response.data.data);
      setTotalRecords2(response.data.totalRecords2);
    } catch (err) {
      setError("Failed to fetch order data.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSalesReport = async () => {
    setReportLoading(true);
    setReportError(null);
    try {
      const response = await axios.get(
        `${REPORT_API_URL}?merchantId=5-C3NEMAATL2AEA2&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
      );
      setSalesReport(response.data);
    } catch (err) {
      setReportError("Failed to fetch sales report.");
    } finally {
      setReportLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData1();
  }, [pageNumber, pageSize]);

  useEffect(() => {
    fetchOrderData2();
  }, [pageNumber2, pageSize2]);

  useEffect(() => {
    fetchSalesReport();
  }, [startDate, endDate]);

  const totalPages = Math.ceil(totalRecords / pageSize);
  const totalPages2 = Math.ceil(totalRecords2 / pageSize2);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };
  const handlePageChange2 = (newPage) => {
    if (newPage > 0 && newPage <= totalPages2) {
      setPageNumber2(newPage);
    }
  };

  const handleViewDetails1 = async (orderId) => {
    try {
      const response = await axios.get(
        `https://digifnbbackendapiv2.azurewebsites.net/api/HistoryDetails/history-details-${orderId}`
      );
      setSelectedOrder(response.data);
    } catch (err) {
      alert("Failed to fetch order details.");
    }
  };
  const handleViewDetails2 = async (orderId) => {
    try {
      const response = await axios.get(
        `https://digifnbbackendapiv2.azurewebsites.net/api/PreparingDetails/preparing-details-${orderId}`
      );
      setSelectedOrder(response.data);
    } catch (err) {
      alert("Failed to fetch order details.");
    }
  };

// Function to handle start date change and set time to 00:00:00
const handleStartDateChange = (date) => {
  const newStartDate = new Date(date);
  newStartDate.setHours(0, 0, 0, 0); // Set start date to 00:00:00
  setStartDate(newStartDate);
};

// Function to handle end date change and set time to 23:59:59
const handleEndDateChange = (date) => {
  const newEndDate = new Date(date);
  newEndDate.setHours(23, 59, 59, 999); // Set end date to 23:59:59
  setEndDate(newEndDate);
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
                <h4 className="card-title">Đơn Hàng History</h4>
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
                          {orderData1.map((order) => (
                            <tr key={order.orderId}>
                              <td>{order.displayOrderId}</td>
                              <td>{order.eaterName || "N/A"}</td>
                              <td>{new Date(order.createdAt).toLocaleString()}</td>
                              <td>{order.eaterAddress}</td>
                              <td>{order.totalDisplay.toLocaleString()} VND</td>
                              <td>{order.state}</td>
                              <td>
                                <button
                                  className="btn btn-primary btn-sm"
                                  onClick={() => handleViewDetails1(order.orderId)}
                                >
                                  View Details
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
              </div>
            </div>
          </div>

          {/* <div className="col-md-12 mt-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Báo cáo Sale</h4>
              </div>
              <div className="card-body">
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <label>Start Date:</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                  <div className="me-3">
                    <label>End Date:</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="form-control"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                  <button
                    className="btn btn-primary align-self-end"
                    onClick={fetchSalesReport}
                  >
                    Fetch Report
                  </button>
                </div>

                {reportLoading ? (
                  <p>Loading report...</p>
                ) : reportError ? (
                  <p className="text-danger">{reportError}</p>
                ) : salesReport ? (
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Merchant ID</th>
                          <td>{salesReport.merchantId}</td>
                        </tr>
                        <tr>
                          <th>Start Date</th>
                          <td>{salesReport.startDate}</td>
                        </tr>
                        <tr>
                          <th>End Date</th>
                          <td>{salesReport.endDate}</td>
                        </tr>
                        <tr>
                          <th>Gross Sale</th>
                          <td>{salesReport.grossSale.toLocaleString()} VND</td>
                        </tr>
                        <tr>
                          <th>Net Sale</th>
                          <td>{salesReport.netSale.toLocaleString()} VND</td>
                        </tr>
                        <tr>
                          <th>Orders Completed</th>
                          <td>{salesReport.orderComplete}</td>
                        </tr>
                        <tr>
                          <th>Orders Cancelled</th>
                          <td>{salesReport.orderCancelled}</td>
                        </tr>
                        <tr>
                          <th>Total Eaters</th>
                          <td>{salesReport.toltalEater}</td>
                        </tr>
                        <tr>
                          <th>Repeated Eaters</th>
                          <td>{salesReport.toltalEaterRepeated}</td>
                        </tr>
                        <tr>
                          <th>Units Sold</th>
                          <td>{salesReport.unitSold}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No report data available.</p>
                )}
              </div>
            </div>
          </div> */}
                    <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Đơn Hàng Preparing</h4>
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
                          {orderData2.map((order) => (
                            <tr key={order.orderId}>
                              <td>{order.displayOrderId}</td>
                              <td>{order.eaterName || "N/A"}</td>
                              <td>{new Date(order.createdAt).toLocaleString()}</td>
                              <td>{order.eaterAddress}</td>
                              <td>{order.totalDisplay.toLocaleString()} VND</td>
                              <td>{order.state}</td>
                              <td>
                                <button
                                  className="btn btn-primary btn-sm"
                                  onClick={() => handleViewDetails2(order.orderId)}
                                >
                                  View Details
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
                        disabled={pageNumber2 === 1}
                        onClick={() => handlePageChange2(pageNumber2 - 1)}
                      >
                        Previous
                      </button>
                      <span>
                        Page {pageNumber2} of {totalPages2}
                      </span>
                      <button
                        className="btn btn-primary"
                        disabled={pageNumber2 === totalPages2}
                        onClick={() => handlePageChange2(pageNumber2 + 1)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Báo cáo Sale</h4>
              </div>
              <div className="card-body">
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <label>Start Date:</label>
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      className="form-control"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                  <div className="me-3">
                    <label>End Date:</label>
                    <DatePicker
                      selected={endDate}
                      onChange={handleEndDateChange}
                      className="form-control"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                  <button
                    className="btn btn-primary align-self-end"
                    onClick={fetchSalesReport}
                  >
                    Fetch Report
                  </button>
                </div>

                {reportLoading ? (
                  <p>Loading report...</p>
                ) : reportError ? (
                  <p className="text-danger">{reportError}</p>
                ) : salesReport ? (
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Merchant ID</th>
                          <td>{salesReport.merchantId}</td>
                        </tr>
                        <tr>
                          <th>Start Date</th>
                          <td>{salesReport.startDate}</td>
                        </tr>
                        <tr>
                          <th>End Date</th>
                          <td>{salesReport.endDate}</td>
                        </tr>
                        <tr>
                          <th>Gross Sale</th>
                          <td>{salesReport.grossSale.toLocaleString()} VND</td>
                        </tr>
                        <tr>
                          <th>Net Sale</th>
                          <td>{salesReport.netSale.toLocaleString()} VND</td>
                        </tr>
                        <tr>
                          <th>Orders Completed</th>
                          <td>{salesReport.orderComplete}</td>
                        </tr>
                        <tr>
                          <th>Orders Cancelled</th>
                          <td>{salesReport.orderCancelled}</td>
                        </tr>
                        <tr>
                          <th>Total Eaters</th>
                          <td>{salesReport.toltalEater}</td>
                        </tr>
                        <tr>
                          <th>Repeated Eaters</th>
                          <td>{salesReport.toltalEaterRepeated}</td>
                        </tr>
                        <tr>
                          <th>Units Sold</th>
                          <td>{salesReport.unitSold}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No report data available.</p>
                )}
              </div>
            </div>
          </div>

          {/* Display order details modal or section if selectedOrder is not null */}
          {selectedOrder && (
            <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Order Details</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setSelectedOrder(null)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Order details content here */}
                    <pre>{JSON.stringify(selectedOrder, null, 2)}</pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Datatables;
