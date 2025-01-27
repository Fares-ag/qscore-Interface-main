// CenterBranchManagement.jsx
import React, { useState } from "react";
import CenterSidebar from "../../../components/Sidebar/CenterSidebar";
import "../../PagesDesign.css";
import { PlusOutlined } from "@ant-design/icons";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import ListCenterDevicesView from "../../../views/client/ListCenterDevicesView";
import CenterDeviceFilter from "../../../components/Filters/CenterDeviceFilter";

const ListCenterDevices = () => {
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
      <Topheader />

      <div className="dashboard-body">
        <CenterSidebar />

        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Device Management"
              showButton={false}
              onButtonClick={handleAddBranchClick}
              buttonIcon={
                <PlusOutlined
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    marginRight: "8px",
                  }}
                />
              }
            />
            {/* Use the specific BranchManagementFilter component */}
            <CenterDeviceFilter
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
            />
            <ListCenterDevicesView
              selectedFilter={filter}
              searchTerm={searchTerm}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListCenterDevices;
