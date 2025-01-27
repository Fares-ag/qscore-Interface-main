import React, { useState } from "react";
import CenterSidebar from "../components/Sidebar/CenterSidebar";
import NewUser from "../views/platform-admin/Admin/AddAdminView";
import "./PagesDesign.css"; // CSS module or external styles
import Topheader from "../components/Topheader";
import AdminHeader from "../components/AdminHeader/AdminHead";
import CenterNewUser from "../views/client/AddCenterUserView";
import ImageUpload from "../components/ImageUpload";
import AppointmentView from "../views/client/AppointmentView";
import AppointmentFilter from "../components/Filters/AppointmentFilter";

const CenterAppointment = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBranchClick = () => {
    console.log("Add Branch button clicked");
  };

  const handleFilterChange = (selectedFilter) => {
    console.log("Filter changed:", selectedFilter);
    setFilter(selectedFilter);
  };

  const handleSearchChange = (search) => {
    console.log("Search term:", search);
    setSearchTerm(search);
  };

  return (
    <div className="dashboard-container">
      {/* Top Header */}
      <Topheader />

      {/* Main Layout */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <CenterSidebar />

        {/* Main Section */}
        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Appointments" // Dynamic title
              buttonLabel="Cancel" // Dynamic button label // Attach button handler
              showButton={false}
            />
            <AppointmentFilter
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
            />
            <AppointmentView selectedFilter={filter} searchTerm={searchTerm} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CenterAppointment;
