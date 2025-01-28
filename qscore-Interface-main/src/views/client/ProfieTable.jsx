import React from "react";
import "./ProfileTable.css";
import { InfoCircleOutlined } from "@ant-design/icons";

const ProfileTable = () => {
  return (
    <div className="profile-table">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="/assets/user-01.png"
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">Al Atakal Garage</h2>
        {/* Icon with Label and Text */}
        <div className="icon-label-text">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="#0D2A76" />
            <g clip-path="url(#clip0_850_18137)">
              <path
                d="M28.9655 15.1562L22.652 21.4698C21.948 22.1719 20.9943 22.5663 20 22.5663C19.0057 22.5663 18.052 22.1719 17.348 21.4698L11.0345 15.1562C11.024 15.2748 11 15.382 11 15.4998V24.4998C11.0012 25.4939 11.3967 26.4471 12.0997 27.1501C12.8027 27.8531 13.7558 28.2486 14.75 28.2498H25.25C26.2442 28.2486 27.1973 27.8531 27.9003 27.1501C28.6033 26.4471 28.9988 25.4939 29 24.4998V15.4998C29 15.382 28.976 15.2748 28.9655 15.1562Z"
                fill="white"
              />
              <path
                d="M21.5916 20.4095L28.4421 13.5582C28.1103 13.008 27.6422 12.5525 27.0831 12.2358C26.524 11.9191 25.8927 11.7518 25.2501 11.75H14.7501C14.1075 11.7518 13.4762 11.9191 12.9171 12.2358C12.358 12.5525 11.89 13.008 11.5581 13.5582L18.4086 20.4095C18.8313 20.8305 19.4035 21.0669 20.0001 21.0669C20.5967 21.0669 21.1689 20.8305 21.5916 20.4095Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_850_18137">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(11 11)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="info-icon">
            <div className="label-text">
              <h2 className="icon-label">Email</h2>
              <p className="icon-description">Suas@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="icon-label-text">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="#0D2A76" />
            <path
              d="M13.25 12.5H14.75V27.5H13.25V12.5ZM18.5 15.5H23.75V17H18.5V15.5ZM18.5 18.5H23.75V20H18.5V18.5Z"
              fill="white"
            />
            <path
              d="M25.25 12.5H15.5V27.5H25.25C26.0773 27.5 26.75 26.8273 26.75 26V14C26.75 13.1727 26.0773 12.5 25.25 12.5ZM25.25 26H17V14H25.25V26Z"
              fill="white"
            />
          </svg>

          <div className="info-icon">
            <div className="label-text">
              <h2 className="icon-label">CR Number</h2>
              <p className="icon-description">016752</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <form className="profile-form">
          <h1 className="profile-header">General Information</h1>
          {/* Form Inputs */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="+974 3038 3021"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Fares Salaam Ahmed"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+974 5598 0301"
              className="form-input"
            />
          </div>

          {/* Text and Button Section */}
          <div className="text-button-section">
            <p className="form-text">Contract Details</p>
            <button type="button" className="secondary-button">
              View Contract
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5002 7.33333H12.5002V2.66667C12.5002 2.48986 12.4299 2.32029 12.3049 2.19526C12.1799 2.07024 12.0103 2 11.8335 2H2.50016C2.32335 2 2.15378 2.07024 2.02876 2.19526C1.90373 2.32029 1.8335 2.48986 1.8335 2.66667V12C1.8335 13.1027 2.73083 14 3.8335 14H13.1668C14.2695 14 15.1668 13.1027 15.1668 12V8C15.1668 7.82319 15.0966 7.65362 14.9716 7.5286C14.8465 7.40357 14.677 7.33333 14.5002 7.33333ZM3.8335 12.6667C3.65669 12.6667 3.48712 12.5964 3.36209 12.4714C3.23707 12.3464 3.16683 12.1768 3.16683 12V3.33333H11.1668V12C11.1668 12.234 11.2075 12.4587 11.2808 12.6667H3.8335ZM13.8335 12C13.8335 12.1768 13.7633 12.3464 13.6382 12.4714C13.5132 12.5964 13.3436 12.6667 13.1668 12.6667C12.99 12.6667 12.8204 12.5964 12.6954 12.4714C12.5704 12.3464 12.5002 12.1768 12.5002 12V8.66667H13.8335V12Z"
                  fill="white"
                />
                <path
                  d="M4.50016 4.66667H9.8335V6H4.50016V4.66667ZM4.50016 7.33333H9.8335V8.66667H4.50016V7.33333ZM7.8335 10H9.8335V11.3333H7.8335V10Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileTable;
