import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetails, logout } from "../store/slices/authSlice";
import "./Topheader.css";

const Topheader = () => {
  const dispatch = useDispatch();
  const { name, email, profilePicture } = useSelector(selectUserDetails);

  const handleLogout = () => {
    dispatch(logout());
    // Redirect to login page if necessary
    window.location.href = "/";
  };

  return (
    <header className="topheader">
      <div className="topheader-content">
        <h1>Admin Portal</h1>
      </div>
      <div className="topheader-right">
        <button
          className="notifications icon-button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="notification-icon"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            style={{
              fill: "#333",
              transition: "fill 0.3s ease",
            }}
          >
            <path
              fill="currentColor"
              d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A1 1 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-.293-.707zM19 17H5v-.586l1.707-1.707A1 1 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22"
            ></path>
          </svg>
        </button>

        <div className="profile">
          <div className="dropdown">
            <div className="profile-pic">
              <img
                src={profilePicture}
                alt="Profile"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </div>
            <button className="dropbtn">{name || "User"} ▼</button>
            <div className="dropdown-content">
              <p>{email}</p>
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a onClick={handleLogout}>Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topheader;
