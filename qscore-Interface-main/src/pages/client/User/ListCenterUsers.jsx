import React from "react";
import CenterSidebar from "../../../components/Sidebar/CenterSidebar";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import Filters from "../../../components/Filters/Filters";
import ListCenterUsersView from "../../../views/client/ListCenterUsersView";
import { PlusOutlined } from "@ant-design/icons";

const ListCenterUsers = () => {
  const handleAddUserClick = () => {
    console.log("Add New User button clicked");
  };

  const handleFilterChange = (filter) => {
    console.log("Selected Filter:", filter);
  };

  const handleSearchChange = (searchValue) => {
    console.log("Search Query:", searchValue);
  };

  return (
    <div className="dashboard-container">
      <Topheader />
      <div className="dashboard-body">
        <CenterSidebar />
        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="User Management"
              buttonLabel="Add New User"
              buttonClass="center"
              onButtonClick={handleAddUserClick}
              buttonIcon={<PlusOutlined />}
            />
            <Filters
              filterOptions={["All Users", "Active", "Inactive"]}
              dropdownFilters={[
                "Super Admin",
                "Admin",
                "Supervisor",
                "Officer",
              ]}
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
              searchPlaceholder="Search users"
            />
            <ListCenterUsersView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListCenterUsers;
