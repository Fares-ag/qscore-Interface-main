import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // Track active menu item
  const [isOpen, setIsOpen] = useState(true);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle menu click
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className="sidebar-header-logo">
        <img src=".\assets\qScore.png" alt="Logo" />
      </div>

      <ul>
        <li
          className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
        >
          <Link to="/dashboard" className="menu-link">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 18 18"
              >
                <path d="M5.25 0H3C1.34315 0 0 1.34315 0 3V5.25C0 6.90685 1.34315 8.25 3 8.25H5.25C6.90685 8.25 8.25 6.90685 8.25 5.25V3C8.25 1.34315 6.90685 0 5.25 0Z" />
                <path d="M14.9999 0H12.7499C11.093 0 9.74989 1.34315 9.74989 3V5.25C9.74989 6.90686 11.093 8.25001 12.7499 8.25001H14.9999C16.6567 8.25001 17.9999 6.90686 17.9999 5.25V3C17.9999 1.34315 16.6567 0 14.9999 0Z" />
                <path d="M5.25 9.75H3C1.34315 9.75 0 11.0931 0 12.75V15C0 16.6569 1.34315 18 3 18H5.25C6.90685 18 8.25 16.6569 8.25 15V12.75C8.25 11.0931 6.90685 9.75 5.25 9.75Z" />
                <path d="M14.9999 9.75H12.7499C11.093 9.75 9.74989 11.0931 9.74989 12.75V15C9.74989 16.6569 11.093 18 12.7499 18H14.9999C16.6567 18 17.9999 16.6569 17.9999 15V12.75C17.9999 11.0931 16.6567 9.75 14.9999 9.75Z" />
              </svg>
            </span>
            <span className="menu-text">Dashboard</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "admin" ? "active" : ""}`}>
          <Link to="/usermanagement" className="menu-link">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 18 18"
              >
                <path d="M18.75 5H17.5V10H18.75V5Z" />
                <path d="M15.625 3.125H14.375V10H15.625V3.125Z" />
                <path d="M12.5 6.25H11.25V10H12.5V6.25Z" />
                <path d="M10 18.75H8.75V15C8.74945 14.5029 8.55173 14.0263 8.20022 13.6748C7.84871 13.3233 7.37211 13.1255 6.875 13.125H4.375C3.87789 13.1255 3.40129 13.3233 3.04978 13.6748C2.69827 14.0263 2.50055 14.5029 2.5 15V18.75H1.25V15C1.25098 14.1715 1.58053 13.3772 2.16637 12.7914C2.75221 12.2055 3.5465 11.876 4.375 11.875H6.875C7.7035 11.876 8.49779 12.2055 9.08363 12.7914C9.66947 13.3772 9.99902 14.1715 10 15V18.75Z" />
                <path d="M5.625 5.625C5.99584 5.625 6.35835 5.73497 6.6667 5.94099C6.97504 6.14702 7.21536 6.43986 7.35728 6.78247C7.49919 7.12508 7.53632 7.50208 7.46397 7.86579C7.39163 8.22951 7.21305 8.5636 6.95083 8.82583C6.6886 9.08805 6.35451 9.26662 5.9908 9.33897C5.62708 9.41132 5.25008 9.37419 4.90747 9.23227C4.56486 9.09036 4.27202 8.85004 4.066 8.54169C3.85997 8.23335 3.75 7.87084 3.75 7.5C3.75 7.00272 3.94755 6.5258 4.29918 6.17417C4.65081 5.82254 5.12772 5.625 5.625 5.625Z" />
              </svg>
            </span>
            <span className="menu-text">Admin</span>
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenu === "inspection" ? "active" : ""}`}
        >
          <Link to="/view-centers" className="menu-link">
            <span className="icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5624 0.250035C5.36379 0.245956 4.19032 0.593651 3.1874 1.25004L7.1874 5.25004C7.32062 5.3637 7.42974 5.50287 7.50835 5.65935C7.58695 5.81583 7.63345 5.98646 7.6451 6.16119C7.65674 6.33592 7.63331 6.51121 7.57617 6.67674C7.51904 6.84227 7.42935 6.9947 7.3124 7.12504C7.18206 7.24198 7.02964 7.33167 6.86411 7.38881C6.69858 7.44594 6.52328 7.46938 6.34856 7.45773C6.17383 7.44608 6.0032 7.39958 5.84672 7.32098C5.69023 7.24238 5.55106 7.13325 5.4374 7.00004L1.3124 3.00004C0.599211 4.04949 0.228084 5.29386 0.249903 6.56254C0.256486 8.23469 0.923665 9.83647 2.10606 11.0189C3.28846 12.2013 4.89025 12.8685 6.5624 12.875C7.10963 12.878 7.65523 12.8151 8.1874 12.6875L12.3749 16.875C12.9634 17.4635 13.7615 17.7941 14.5937 17.7941C15.4258 17.7941 16.224 17.4635 16.8124 16.875C17.4009 16.2866 17.7314 15.4885 17.7314 14.6563C17.7314 13.8241 17.4009 13.026 16.8124 12.4375L12.6249 8.25004C12.7524 7.71787 12.8154 7.17227 12.8124 6.62504C12.829 5.79382 12.6797 4.96763 12.373 4.19486C12.0664 3.42209 11.6086 2.71826 11.0266 2.12459C10.4446 1.53092 9.74995 1.05934 8.9834 0.737457C8.21685 0.415577 7.39379 0.249869 6.5624 0.250035ZM11.5624 6.56254C11.5615 7.00664 11.4984 7.44844 11.3749 7.87504L11.1874 8.56254L11.6874 9.06254L15.8749 13.25C16.0532 13.4189 16.1951 13.6224 16.2919 13.8481C16.3886 14.0738 16.4381 14.317 16.4374 14.5625C16.4444 14.809 16.3978 15.0541 16.3006 15.2807C16.2035 15.5073 16.0582 15.7101 15.8749 15.875C15.7056 16.0528 15.502 16.1943 15.2764 16.291C15.0508 16.3877 14.8079 16.4375 14.5624 16.4375C14.3169 16.4375 14.074 16.3877 13.8484 16.291C13.6228 16.1943 13.4192 16.0528 13.2499 15.875L9.0624 11.6875L8.5624 11.1875L7.8749 11.375C7.4483 11.4985 7.00651 11.5616 6.5624 11.5625C5.23432 11.5588 3.95862 11.0441 2.9999 10.125C2.51506 9.66882 2.13111 9.11615 1.87276 8.50258C1.61442 7.88901 1.48741 7.22816 1.4999 6.56254C1.50076 6.09789 1.56382 5.63545 1.6874 5.18754L4.4374 7.93754C4.66977 8.1904 4.95016 8.39448 5.26221 8.53788C5.57426 8.68127 5.91174 8.76112 6.25496 8.77275C6.59818 8.78438 6.94029 8.72758 7.26133 8.60564C7.58238 8.48371 7.87594 8.29909 8.1249 8.06254C8.36145 7.81357 8.54608 7.52001 8.66801 7.19897C8.78995 6.87792 8.84675 6.53582 8.83512 6.19259C8.82348 5.84937 8.74364 5.51189 8.60024 5.19984C8.45685 4.88779 8.25277 4.60741 7.9999 4.37504L5.2499 1.62504C5.65412 1.4972 6.07597 1.43392 6.4999 1.43754C7.82798 1.44122 9.10368 1.95598 10.0624 2.87504C11.022 3.86296 11.5599 5.18528 11.5624 6.56254Z" />
              </svg>
            </span>
            <span className="menu-text">Inspection Centers</span>
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenu === "branches" ? "active" : ""}`}
        >
          <Link to="/view-branches" className="menu-link">
            <span className="icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 2H9C7.897 2 7 2.897 7 4V10H5C3.897 10 3 10.897 3 12V21C3 21.2652 3.10536 21.5196 3.29289 21.7071C3.48043 21.8946 3.73478 22 4 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V4C21 2.897 20.103 2 19 2ZM5 12H11V20H5V12ZM19 20H13V12C13 10.897 12.103 10 11 10H9V4H19V20Z" />
                <path d="M11 6H13V8H11V6ZM15 6H17V8H15V6ZM15 10.031H17V12H15V10.031ZM15 14H17V16H15V14ZM7 14.001H9V16.001H7V14.001Z" />
              </svg>
            </span>
            <span className="menu-text">Branches</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "device" ? "active" : ""}`}>
          <Link to="/view-devices" className="menu-link">
            <span className="icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M33.3334 5H11.6667C9.82837 5 8.33337 6.495 8.33337 8.33333V11.6667H6.66671C4.82837 11.6667 3.33337 13.1617 3.33337 15V31.6667C3.33337 33.505 4.82837 35 6.66671 35H16.6667C18.505 35 20 33.505 20 31.6667H33.3334C35.1717 31.6667 36.6667 30.1717 36.6667 28.3333V8.33333C36.6667 6.495 35.1717 5 33.3334 5ZM16.6617 31.6667H6.66671V15H16.6667L16.6617 31.6667ZM33.3284 28.3333H20V15C20 13.1617 18.505 11.6667 16.6667 11.6667H11.6667V8.33333H33.3334L33.3284 28.3333Z" />
              </svg>
            </span>
            <span className="menu-text">Device Management</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "dispute" ? "active" : ""}`}>
          <Link to="/admin-dispute" className="menu-link">
            <span className="icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.486 2 2 5.589 2 10C2 12.908 3.898 15.515 7 16.934V22L12.34 17.995C17.697 17.852 22 14.32 22 10C22 5.589 17.514 2 12 2ZM12 16H11.667L9 18V15.583L8.359 15.336C5.67 14.301 4 12.256 4 10C4 6.691 7.589 4 12 4C16.411 4 20 6.691 20 10C20 13.309 16.411 16 12 16Z" />
                <path d="M8.50299 11.589V12.987H9.90099L13.771 9.12302L12.372 7.72502L8.50299 11.589ZM14.43 8.46402L13.032 7.06602L14.099 5.99902L15.497 7.39702L14.43 8.46402Z" />
              </svg>
            </span>
            <span className="menu-text">Dispute Management</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "dispute" ? "active" : ""}`}>
          <Link to="/admin-dispute" className="menu-link">
            <span className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 22H19C20.103 22 21 21.103 21 20V5C21 3.897 20.103 3 19 3H17C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H8C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3H5C3.897 3 3 3.897 3 5V20C3 21.103 3.897 22 5 22ZM5 5H7V7H17V5H19V20H5V5Z" />
                <path d="M11 13.586L9.207 11.793L7.793 13.207L11 16.414L16.207 11.207L14.793 9.79297L11 13.586Z" />
              </svg>
            </span>
            <span className="menu-text">Appointments</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "dispute" ? "active" : ""}`}>
          <Link to="/withdrawal" className="menu-link">
            <span className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15C10.16 15 10 14.14 10 14H8C8 14.92 8.66 16.55 11 16.92V18H13V16.92C15 16.58 16 15.29 16 14C16 12.88 15.48 11 12 11C10 11 10 10.37 10 10C10 9.63 10.7 9 12 9C13.3 9 13.39 9.64 13.4 10H15.4C15.3865 9.31875 15.1415 8.66241 14.7053 8.13896C14.269 7.61551 13.6676 7.25614 13 7.12V6H11V7.09C9 7.42 8 8.71 8 10C8 11.12 8.52 13 12 13C14 13 14 13.68 14 14C14 14.32 13.38 15 12 15Z" />
                <path d="M5 2H2V4H4V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V4H22V2H5ZM18 20H6V4H18V20Z" />
              </svg>
            </span>
            <span className="menu-text">Withdrawal Request</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "dispute" ? "active" : ""}`}>
          <Link to="/bankaccount" className="menu-link">
            <span className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 8V12.001H3V18H2V21H18L21 21.001L22 21V18H21V12.001H22V8L12 2L2 8ZM6 18V12.001H8V18H6ZM11 18V12.001H13V18H11ZM18 18H16V12.001H18V18ZM14 8C13.9999 8.26271 13.9481 8.52283 13.8475 8.76552C13.7469 9.00821 13.5995 9.2287 13.4137 9.41442C13.2279 9.60014 13.0073 9.74744 12.7646 9.84791C12.5219 9.94839 12.2617 10.0001 11.999 10C11.7363 9.99993 11.4762 9.94812 11.2335 9.84753C10.9908 9.74693 10.7703 9.59952 10.5846 9.41371C10.3989 9.2279 10.2516 9.00733 10.1511 8.7646C10.0506 8.52186 9.99893 8.26171 9.999 7.999C9.99913 7.46843 10.21 6.95965 10.5853 6.58458C10.9605 6.20951 11.4694 5.99887 12 5.999C12.5306 5.99913 13.0393 6.21003 13.4144 6.58529C13.7895 6.96055 14.0001 7.46943 14 8Z" />
              </svg>
            </span>
            <span className="menu-text">Bank Account Management</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "dispute" ? "active" : ""}`}>
          <Link to="/inspectionManagement" className="menu-link">
            <span className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3H9V21H7V3ZM4 3H6V21H4V3ZM10 3H12V21H10V3ZM19.062 20.792L12.839 3.902L14.716 3.21L20.939 20.1L19.062 20.792Z" />
              </svg>
            </span>
            <span className="menu-text">Inspection Management</span>
          </Link>
        </li>
        <li className={`menu-item ${activeMenu === "dispute" ? "active" : ""}`}>
          <Link to="/adminDispute" className="menu-link">
            <span className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.14 2C10.1622 2 8.22879 2.58649 6.58429 3.6853C4.9398 4.78412 3.65808 6.3459 2.9012 8.17317C2.14432 10.0004 1.94629 12.0111 2.33214 13.9509C2.718 15.8907 3.6704 17.6725 5.06893 19.0711C6.46745 20.4696 8.24928 21.422 10.1891 21.8079C12.1289 22.1937 14.1396 21.9957 15.9668 21.2388C17.7941 20.4819 19.3559 19.2002 20.4547 17.5557C21.5535 15.9112 22.14 13.9778 22.14 12C22.14 9.34784 21.0864 6.8043 19.2111 4.92893C17.3357 3.05357 14.7922 2 12.14 2ZM12.14 20C10.5577 20 9.01103 19.5308 7.69543 18.6518C6.37984 17.7727 5.35446 16.5233 4.74896 15.0615C4.14346 13.5997 3.98503 11.9911 4.29371 10.4393C4.6024 8.88743 5.36432 7.46197 6.48314 6.34315C7.60196 5.22433 9.02743 4.4624 10.5793 4.15372C12.1311 3.84504 13.7397 4.00346 15.2015 4.60896C16.6633 5.21447 17.9127 6.23984 18.7918 7.55544C19.6708 8.87103 20.14 10.4177 20.14 12C20.14 14.1217 19.2971 16.1566 17.7969 17.6569C16.2966 19.1571 14.2617 20 12.14 20Z" />
                <path d="M16.14 10C16.14 9.20435 15.8239 8.44129 15.2613 7.87868C14.6987 7.31607 13.9356 7 13.14 7H8.14V17H10.14V13H11.6L14.27 17H16.67L13.92 12.88C14.5543 12.7092 15.115 12.335 15.5161 11.8147C15.9171 11.2944 16.1363 10.6569 16.14 10ZM13.14 11H10.14V9H13.14C13.4052 9 13.6596 9.10536 13.8471 9.29289C14.0346 9.48043 14.14 9.73478 14.14 10C14.14 10.2652 14.0346 10.5196 13.8471 10.7071C13.6596 10.8946 13.4052 11 13.14 11Z" />
              </svg>
            </span>
            <span className="menu-text">Partner Inquiry</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
