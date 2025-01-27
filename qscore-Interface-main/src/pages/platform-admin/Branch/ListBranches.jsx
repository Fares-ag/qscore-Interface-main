// BranchManagement.jsx
import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "../../PagesDesign.css"; // CSS module or external styles
import { FastBackwardFilled, PlusOutlined } from "@ant-design/icons";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import BranchesView from "../../../views/platform-admin/Branch/BranchesView";
import BranchesFilter from "../../../components/Filters/BranchesFilter";
import ViewBranchHandler from "../../../views/platform-admin/Branch/AddBranchView";

const ListBranches = () => {
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
        <Sidebar />

        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Branch Management"
              buttonLabel="Add Branch"
              buttonClass="center"
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
            <BranchesFilter
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
              hideSearch={true}
            />
            <BranchesView
              selectedFilter={filter}
              searchTerm={searchTerm}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListBranches;