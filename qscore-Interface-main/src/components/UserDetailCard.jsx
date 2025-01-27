import React from "react";

const UserDetailCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        background: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "20px 30px",
        maxWidth: "100%",
        margin: "20px auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img
          src="https://via.placeholder.com/100"
          alt="User Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      {/* Left Section: Profile */}
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px 40px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "0 0 5px",
                color: "#333",
              }}
            >
              Alatkal Garage
            </h2>
            <span
              style={{
                background: "#D4EDDA",
                color: "#28A745",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Active
            </span>
          </div>
        </div>

        {/* Center Section: Dropdown */}

        <button
          style={{
            background: "#002D9C",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          All Branches
        </button>
      </div>

      {/* Right Section: Details */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px 40px",
        }}
      >
        <DetailItem label="Center ID" value="ID-001" />
        <DetailItem label="E-mail" value="lindablair@mail.com" isLink />
        <DetailItem label="Address" value="56-774-69" />
        <DetailItem label="Phone Number" value="974 6677 7788" />
        <DetailItem label="Number of Branches" value="03" />
        <DetailItem
          label="Rating"
          value={
            <span style={{ color: "#FFD700", fontWeight: "bold" }}>
              4.5<span style={{ color: "#666", fontWeight: "normal" }}>/5</span>
            </span>
          }
        />
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, isLink }) => (
  <div style={{ textAlign: "left" }}>
    <p
      style={{
        margin: "0 0 5px",
        fontSize: "14px",
        color: "#666",
        fontWeight: "500",
      }}
    >
      {label}
    </p>
    {isLink ? (
      <a
        href={`mailto:${value}`}
        style={{
          fontSize: "16px",
          color: "#002D9C",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        {value}
      </a>
    ) : (
      <p
        style={{
          margin: 0,
          fontSize: "16px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        {value}
      </p>
    )}
  </div>
);

export default UserDetailCard;
