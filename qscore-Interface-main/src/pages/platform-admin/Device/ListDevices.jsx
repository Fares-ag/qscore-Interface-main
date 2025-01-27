import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "../../PagesDesign.css"; // CSS module or external styles
import { PlusOutlined } from "@ant-design/icons";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import DevicesView from "../../../views/platform-admin/Device/DevicesView";
import DeviceFilter from "../../../components/Filters/DeviceFilter";

const ListDevices = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddDeviceClick = () => {
    console.log("Add Device button clicked");
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  return (
    <div className="dashboard-container">
      <Topheader />
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Device Management"
              buttonLabel="Add Device"
              buttonClass="center"
              onButtonClick={handleAddDeviceClick}
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
            <DeviceFilter
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
            />
            <DevicesView
              selectedFilter={filter}
              searchTerm={searchTerm}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListDevices;
