import React, { useCallback } from "react";
import Datatabels from "../../components/user/Datatabels";
import Dasboard from "../../components/user/Dasboard";
import { useLocation } from 'react-router-dom';

function Index() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab');

  const renderComponent = useCallback(()=>{
    console.log(tab)
    switch (tab) {
      case 'datatabels':
         return (<Datatabels />)
         case '':
          return (<Dasboard />)
      default:
          return (<Dasboard />);
    }
  },[tab])
  
  return (
    <div>
      <div className="wrapper">
        {/* <!-- Sidebar --> */}
        <div className="sidebar" data-background-color="dark">
          <div className="sidebar-logo">
            {/* <!-- Logo Header --> */}
            <div className="logo-header" data-background-color="dark">
              <a href="/?tab=dasboard" className="logo">
                <img
                  // src="assets/img/kaiadmin/logo_light.svg"
                  // src="assets/img/kaiadmin/logo_digifnb.png"
                  src="assets/img/logo_digifnb.jpg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height="50"
                />
              </a>
              <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                  <i className="gg-menu-right"></i>
                </button>
                <button className="btn btn-toggle sidenav-toggler">
                  <i className="gg-menu-left"></i>
                </button>
              </div>
              <button className="topbar-toggler more">
                <i className="gg-more-vertical-alt"></i>
              </button>
            </div>
            {/* <!-- End Logo Header --> */}
          </div>
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <ul className="nav nav-secondary">
                <li className="nav-item active">
                  <a
                    data-bs-toggle="collapse"
                    href="#dashboard"
                    className="collapsed"
                    aria-expanded="false"
                  >
                    <i className="fas fa-home"></i>
                    <p>Quản Lý Cửa Hàng</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="dashboard">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="/?tab=dasboard">
                          <span className="sub-item">Báo cáo doanh thu</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-section">
                  <span className="sidebar-mini-icon">
                    <i className="fa fa-ellipsis-h"></i>
                  </span>
                  <h4 className="text-section">Components</h4>
                </li>
                {/* <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#base">
                    <i className="fas fa-layer-group"></i>
                    <p>Base</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="base">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="components/avatars.html">
                          <span className="sub-item">Avatars</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/buttons.html">
                          <span className="sub-item">Buttons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/gridsystem.html">
                          <span className="sub-item">Grid System</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/panels.html">
                          <span className="sub-item">Panels</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/notifications.html">
                          <span className="sub-item">Notifications</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/sweetalert.html">
                          <span className="sub-item">Sweet Alert</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/font-awesome-icons.html">
                          <span className="sub-item">Font Awesome Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/simple-line-icons.html">
                          <span className="sub-item">Simple Line Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/typography.html">
                          <span className="sub-item">Typography</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarLayouts">
                    <i className="fas fa-th-list"></i>
                    <p>Sidebar Layouts</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="sidebarLayouts">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="sidebar-style-2.html">
                          <span className="sub-item">Sidebar Style 2</span>
                        </a>
                      </li>
                      <li>
                        <a href="icon-menu.html">
                          <span className="sub-item">Icon Menu</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#forms">
                    <i className="fas fa-pen-square"></i>
                    <p>Forms</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="forms">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="forms/forms.html">
                          <span className="sub-item">Basic Form</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li> */}
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#tables">
                    <i className="fas fa-comments"></i>
                    <p>Gửi Zalo</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="tables/tables.html">
                          <span className="sub-item">Feedback</span>
                        </a>
                      </li>
                      <li>
                        <a href="/?tab=datatabels">
                          <span className="sub-item">Order</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#tables">
                    <i className="fas fa-table"></i>
                    <p>Bảng</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="tables/tables.html">
                          <span className="sub-item">Feedback</span>
                        </a>
                      </li>
                      <li>
                        <a href="/?tab=datatabels">
                          <span className="sub-item">Order</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#maps">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Bản đồ</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="maps">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="maps/googlemaps.html">
                          <span className="sub-item">Google Maps</span>
                        </a>
                      </li>
                      <li>
                        <a href="maps/jsvectormap.html">
                          <span className="sub-item">Jsvectormap</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#charts">
                    <i className="far fa-chart-bar"></i>
                    <p>Biểu đồ</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="charts/charts.html">
                          <span className="sub-item">Chart Js</span>
                        </a>
                      </li>
                      <li>
                        <a href="charts/sparkline.html">
                          <span className="sub-item">Sparkline</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="widgets.html">
                    <i className="fas fa-desktop"></i>
                    <p>Tiện ích</p>
                    <span className="badge badge-success">4</span>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a href="../../documentation/index.html">
                    <i className="fas fa-file"></i>
                    <p>Documentation</p>
                    <span className="badge badge-secondary">1</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#submenu">
                    <i className="fas fa-bars"></i>
                    <p>Menu Levels</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="submenu">
                    <ul className="nav nav-collapse">
                      <li>
                        <a data-bs-toggle="collapse" href="#subnav1">
                          <span className="sub-item">Level 1</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="subnav1">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a data-bs-toggle="collapse" href="#subnav2">
                          <span className="sub-item">Level 1</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="subnav2">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Sidebar --> */}

        <div className="main-panel">
          <div className="main-header">
            <div className="main-header-logo">
              {/* <!-- Logo Header --> */}
              <div className="logo-header" data-background-color="dark">
                <a href="index.html" className="logo">
                  <img
                    src="assets/img/kaiadmin/logo_light.svg"
                    alt="navbar brand"
                    className="navbar-brand"
                    height="20"
                  />
                </a>
                <div className="nav-toggle">
                  <button className="btn btn-toggle toggle-sidebar">
                    <i className="gg-menu-right"></i>
                  </button>
                  <button className="btn btn-toggle sidenav-toggler">
                    <i className="gg-menu-left"></i>
                  </button>
                </div>
                <button className="topbar-toggler more">
                  <i className="gg-more-vertical-alt"></i>
                </button>
              </div>
              {/* <!-- End Logo Header --> */}
            </div>
            {/* <!-- Navbar Header --> */}
            <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
              <div className="container-fluid">
                <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button type="submit" className="btn btn-search pe-1">
                        <i className="fa fa-search search-icon"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Search ..."
                      className="form-control"
                    />
                  </div>
                </nav>

                <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                  <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <i className="fa fa-search"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-search animated fadeIn">
                      <form className="navbar-left navbar-form nav-search">
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="Search ..."
                            className="form-control"
                          />
                        </div>
                      </form>
                    </ul>
                  </li>
                  <li className="nav-item topbar-icon dropdown hidden-caret">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="messageDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                    <ul
                      className="dropdown-menu messages-notif-box animated fadeIn"
                      aria-labelledby="messageDropdown"
                    >
                      <li>
                        <div className="dropdown-title d-flex justify-content-between align-items-center">
                          Messages
                          <a href="#" className="small">
                            Mark all as read
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="message-notif-scroll scrollbar-outer">
                          <div className="notif-center">
                            <a href="#">
                              <div className="notif-img">
                                <img
                                  src="assets/img/jm_denis.jpg"
                                  alt="Img Profile"
                                />
                              </div>
                              <div className="notif-content">
                                <span className="subject">Jimmy Denis</span>
                                <span className="block"> How are you ? </span>
                                <span className="time">5 minutes ago</span>
                              </div>
                            </a>
                            <a href="#">
                              <div className="notif-img">
                                <img
                                  src="assets/img/chadengle.jpg"
                                  alt="Img Profile"
                                />
                              </div>
                              <div className="notif-content">
                                <span className="subject">Chad</span>
                                <span className="block"> Ok, Thanks ! </span>
                                <span className="time">12 minutes ago</span>
                              </div>
                            </a>
                            <a href="#">
                              <div className="notif-img">
                                <img
                                  src="assets/img/mlane.jpg"
                                  alt="Img Profile"
                                />
                              </div>
                              <div className="notif-content">
                                <span className="subject">Jhon Doe</span>
                                <span className="block">
                                  Ready for the meeting today...
                                </span>
                                <span className="time">12 minutes ago</span>
                              </div>
                            </a>
                            <a href="#">
                              <div className="notif-img">
                                <img
                                  src="assets/img/talha.jpg"
                                  alt="Img Profile"
                                />
                              </div>
                              <div className="notif-content">
                                <span className="subject">Talha</span>
                                <span className="block"> Hi, Apa Kabar ? </span>
                                <span className="time">17 minutes ago</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a className="see-all" href="javascript:void(0);">
                          See all messages<i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item topbar-icon dropdown hidden-caret">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="notifDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-bell"></i>
                      <span className="notification">4</span>
                    </a>
                    <ul
                      className="dropdown-menu notif-box animated fadeIn"
                      aria-labelledby="notifDropdown"
                    >
                      <li>
                        <div className="dropdown-title">
                          You have 4 new notification
                        </div>
                      </li>
                      <li>
                        <div className="notif-scroll scrollbar-outer">
                          <div className="notif-center">
                            <a href="#">
                              <div className="notif-icon notif-primary">
                                <i className="fa fa-user-plus"></i>
                              </div>
                              <div className="notif-content">
                                <span className="block">
                                  {" "}
                                  New user registered{" "}
                                </span>
                                <span className="time">5 minutes ago</span>
                              </div>
                            </a>
                            <a href="#">
                              <div className="notif-icon notif-success">
                                <i className="fa fa-comment"></i>
                              </div>
                              <div className="notif-content">
                                <span className="block">
                                  Rahmad commented on Admin
                                </span>
                                <span className="time">12 minutes ago</span>
                              </div>
                            </a>
                            <a href="#">
                              <div className="notif-img">
                                <img
                                  src="assets/img/profile2.jpg"
                                  alt="Img Profile"
                                />
                              </div>
                              <div className="notif-content">
                                <span className="block">
                                  Reza send messages to you
                                </span>
                                <span className="time">12 minutes ago</span>
                              </div>
                            </a>
                            <a href="#">
                              <div className="notif-icon notif-danger">
                                <i className="fa fa-heart"></i>
                              </div>
                              <div className="notif-content">
                                <span className="block">
                                  {" "}
                                  Farrah liked Admin{" "}
                                </span>
                                <span className="time">17 minutes ago</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a className="see-all" href="javascript:void(0);">
                          See all notifications
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item topbar-icon dropdown hidden-caret">
                    <a
                      className="nav-link"
                      data-bs-toggle="dropdown"
                      href="#"
                      aria-expanded="false"
                    >
                      <i className="fas fa-layer-group"></i>
                    </a>
                    <div className="dropdown-menu quick-actions animated fadeIn">
                      <div className="quick-actions-header">
                        <span className="title mb-1">Quick Actions</span>
                        <span className="subtitle op-7">Shortcuts</span>
                      </div>
                      <div className="quick-actions-scroll scrollbar-outer">
                        <div className="quick-actions-items">
                          <div className="row m-0">
                            <a className="col-6 col-md-4 p-0" href="#">
                              <div className="quick-actions-item">
                                <div className="avatar-item bg-danger rounded-circle">
                                  <i className="far fa-calendar-alt"></i>
                                </div>
                                <span className="text">Calendar</span>
                              </div>
                            </a>
                            <a className="col-6 col-md-4 p-0" href="#">
                              <div className="quick-actions-item">
                                <div className="avatar-item bg-warning rounded-circle">
                                  <i className="fas fa-map"></i>
                                </div>
                                <span className="text">Maps</span>
                              </div>
                            </a>
                            <a className="col-6 col-md-4 p-0" href="#">
                              <div className="quick-actions-item">
                                <div className="avatar-item bg-info rounded-circle">
                                  <i className="fas fa-file-excel"></i>
                                </div>
                                <span className="text">Reports</span>
                              </div>
                            </a>
                            <a className="col-6 col-md-4 p-0" href="#">
                              <div className="quick-actions-item">
                                <div className="avatar-item bg-success rounded-circle">
                                  <i className="fas fa-envelope"></i>
                                </div>
                                <span className="text">Emails</span>
                              </div>
                            </a>
                            <a className="col-6 col-md-4 p-0" href="#">
                              <div className="quick-actions-item">
                                <div className="avatar-item bg-primary rounded-circle">
                                  <i className="fas fa-file-invoice-dollar"></i>
                                </div>
                                <span className="text">Invoice</span>
                              </div>
                            </a>
                            <a className="col-6 col-md-4 p-0" href="#">
                              <div className="quick-actions-item">
                                <div className="avatar-item bg-secondary rounded-circle">
                                  <i className="fas fa-credit-card"></i>
                                </div>
                                <span className="text">Payments</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item topbar-user dropdown hidden-caret">
                    <a
                      className="dropdown-toggle profile-pic"
                      data-bs-toggle="dropdown"
                      href="#"
                      aria-expanded="false"
                    >
                      <div className="avatar-sm">
                        <img
                          src="assets/img/AnhSangTQ.jpg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <span className="profile-username">
                        <span className="op-7">Hi,</span>
                        <span className="fw-bold">SangTQ</span>
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-user animated fadeIn">
                      <div className="dropdown-user-scroll scrollbar-outer">
                        <li>
                          <div className="user-box">
                            <div className="avatar-lg">
                              <img
                                src="assets/img/profile.jpg"
                                alt="image profile"
                                className="avatar-img rounded"
                              />
                            </div>
                            <div className="u-text">
                              <h4>Hizrian</h4>
                              <p className="text-muted">hello@example.com</p>
                              <a
                                href="profile.html"
                                className="btn btn-xs btn-secondary btn-sm"
                              >
                                View Profile
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            My Profile
                          </a>
                          <a className="dropdown-item" href="#">
                            My Balance
                          </a>
                          <a className="dropdown-item" href="#">
                            Inbox
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            Account Setting
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <!-- End Navbar --> */}
          </div>
          {renderComponent()}
          <footer className="footer">
            <div className="container-fluid d-flex justify-content-between">
              <nav className="pull-left">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="http://www.themekita.com">
                      ThemeKita
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Help{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Licenses{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright">
                2024, made with{" "}
                <i className="fa fa-heart heart text-danger"></i> by
                <a href="http://www.themekita.com">ThemeKita</a>
              </div>
              <div>
                Distributed by
                <a target="_blank" href="https://themewagon.com/">
                  ThemeWagon
                </a>
                .
              </div>
            </div>
          </footer>
        </div>

        {/* <!-- Custom template | don't include it in your project! --> */}
        <div className="custom-template">
          <div className="title">Settings</div>
          <div className="custom-content">
            <div className="switcher">
              <div className="switch-block">
                <h4>Logo Header</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="selected changeLogoHeaderColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="blue"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="purple"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="light-blue"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="green"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="orange"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="red"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="white"
                  ></button>
                  <br />
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="dark2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="purple2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="light-blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="green2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="orange2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="red2"
                  ></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Navbar Header</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="blue"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="purple"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="light-blue"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="green"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="orange"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="red"
                  ></button>
                  <button
                    type="button"
                    className="selected changeTopBarColor"
                    data-color="white"
                  ></button>
                  <br />
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="dark2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="purple2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="light-blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="green2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="orange2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="red2"
                  ></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Sidebar</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="changeSideBarColor"
                    data-color="white"
                  ></button>
                  <button
                    type="button"
                    className="selected changeSideBarColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    className="changeSideBarColor"
                    data-color="dark2"
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-toggle">
            <i className="icon-settings"></i>
          </div>
        </div>
        {/* <!-- End Custom template --> */}
      </div>
    </div>
  );
}

export default Index;
