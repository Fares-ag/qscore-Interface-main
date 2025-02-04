import React from "react";
import "./button.css";

const Button = ({
  text = "Click Me",
  onClick,
  backgroundColor = "#151515",
  color = "white",
  size = "medium",
  disabled = false,
  style = {},
  className = "",
  icon = null, // Accept an icon prop
}) => {
  // Define a default icon for cancel button (SVG)
  const renderDefaultIcon = () => {
    if (className === "cancel-button") {
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "10px" }}
        >
          <path
            d="M8.94252 7.99962L15.8045 1.13762C15.926 1.01189 15.9932 0.843484 15.9916 0.668686C15.9901 0.493888 15.92 0.32668 15.7964 0.203075C15.6728 0.0794693 15.5056 0.00935665 15.3308 0.0078377C15.156 0.00631876 14.9876 0.073515 14.8619 0.194954L7.99986 7.05695L1.13786 0.194954C1.01212 0.073515 0.843721 0.00631876 0.668923 0.0078377C0.494126 0.00935665 0.326917 0.0794693 0.203312 0.203075C0.0797065 0.32668 0.00959389 0.493888 0.00807494 0.668686C0.00655599 0.843484 0.0737523 1.01189 0.195191 1.13762L7.05719 7.99962L0.195191 14.8616C0.0702103 14.9866 0 15.1562 0 15.333C0 15.5097 0.0702103 15.6793 0.195191 15.8043C0.320209 15.9293 0.489748 15.9995 0.666524 15.9995C0.8433 15.9995 1.01284 15.9293 1.13786 15.8043L7.99986 8.94229L14.8619 15.8043C14.9869 15.9293 15.1564 15.9995 15.3332 15.9995C15.51 15.9995 15.6795 15.9293 15.8045 15.8043C15.9295 15.6793 15.9997 15.5097 15.9997 15.333C15.9997 15.1562 15.9295 14.9866 15.8045 14.8616L8.94252 7.99962Z"
            fill="#858D9D"
          />
        </svg>
      );
    }
    return icon; // Render custom icon if passed as prop
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${size} ${className}`} // Adjusted order
      style={{
        backgroundColor,
        color,
        ...style,
      }}
    >
      {renderDefaultIcon()} {/* Render the icon */}
      <span>{text}</span>
    </button>
  );
};

export default Button;
