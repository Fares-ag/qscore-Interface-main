import React, { useState } from "react";
import "../../PagesDesign.css";
import { PlusOutlined } from "@ant-design/icons";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import axios from "axios";
import ListCenterBranchesView from "../../../views/client/ListCenterBranchesView";
import BranchesFilter from "../../../components/Filters/BranchesFilter";
import CenterSidebar from "../../../components/Sidebar/CenterSidebar";

const ListCenterBranches = () => {
  const [branches, setBranches] = useState([]);
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
              showButton={false}
            />
            <BranchesFilter
              disableFilterChange={true}
              onSearchChange={handleSearchChange}
              hideFilter={true}
            />

            <ListCenterBranchesView
              selectedFilter={filter}
              searchTerm={searchTerm}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListCenterBranches;
