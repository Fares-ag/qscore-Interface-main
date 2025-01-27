import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AddAdminView from "../../../views/platform-admin/Admin/AddAdminView";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";

const AddNewUser = () => {
  return (
    <div className="dashboard-container">
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
              title="Add New Admin User Form" // Dynamic title
              buttonLabel="Cancel" // Dynamic button label // Attach button handler
              showButton={true}
            />
            <AddAdminView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
