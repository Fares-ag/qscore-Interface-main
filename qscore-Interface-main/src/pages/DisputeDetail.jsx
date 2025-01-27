import React, { useState } from "react"; // Add missing useState import
import Sidebar from "../components/Sidebar/Sidebar";
import "./AdminDispute.css"; // CSS module or external styles
import { PlusOutlined } from "@ant-design/icons";
import Topheader from "../components/Topheader";
import AdminHeader from "../components/AdminHeader/AdminHead";
import Filters from "../components/Filters/Filters";
import { CalendarOutlined } from "@ant-design/icons";
import DisputeCard from "../components/DisputeCard";
import DisputeMessage from "../DisputeMessage";

const DisputeDetail = () => {
  const handleAddCenterClick = () => {
    console.log("Add Center button clicked");
    // You can perform any additional action here, like opening a modal, redirecting, etc.
  };
  // State to manage selected filter
  const [filter, setFilter] = useState("All"); // Default filter to "All"
  // Handle filter change
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Define the handleSearchChange function here
  const handleSearchChange = (searchText) => {
    console.log("Search text: ", searchText); // Handle the search text change logic here
    // You can use the `searchText` to filter the data or perform other actions
  };

  // Handle calendar button click
  const handleCalendarClick = () => {
    // You can open a date picker or log to the console for now
    console.log("Calendar button clicked");
  };

  // Example of dynamic filters depending on the page
  const filterOptions = ["All", "Active", "Inactive", "Revenue"]; // Can be customized for different pages

  const disputesData = [
    {
      ticketId: "00001",
      customerName: "Iftikar Ahmed",
      issueDescription: "Inspection time too long",
      customerEmail: "iftikar@gmail.com",
      customerPhone: "3367 3710",
      appointmentDate: "25 Jan 2025",
    },
  ];

  return (
    <div className="dashboard-container admin-dispute-page">
      {/* Top Header */}
      <Topheader />

      {/* Main Layout */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Section */}
        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Dispute Management" // Dynamic title
              showButton={false}
            />
            {/* Pass dynamic filter options to Filters component */}
            <Filters onSearchChange={handleSearchChange}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Calendar Button */}
                <button
                  className="calendar-button"
                  onClick={handleCalendarClick}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    marginLeft: "10px", // Space between search bar and calendar button
                  }}
                >
                  <CalendarOutlined
                    style={{ fontSize: "20px", color: "#1890ff" }}
                  />
                </button>
              </div>
            </Filters>
            <div className="disputes">
              {disputesData.map((dispute) => (
                <>
                  <DisputeCard
                    key={dispute.ticketId}
                    ticketId={dispute.ticketId}
                    customerName={dispute.customerName}
                    issueDescription={dispute.issueDescription}
                    customerEmail={dispute.customerEmail}
                    customerPhone={dispute.customerPhone}
                    appointmentDate={dispute.appointmentDate}
                  />
                  <DisputeMessage />
                </>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DisputeDetail;
