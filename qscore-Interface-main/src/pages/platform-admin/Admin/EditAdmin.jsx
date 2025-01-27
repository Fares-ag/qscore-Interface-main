import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import EditAdminView from "../../../views/platform-admin/Admin/EditAdminView";

const EditAdmin = () => {
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
              title="Edit Info" // Dynamic title
              buttonLabel="Cancel" // Dynamic button label // Attach button handler
              showButton={true}
            />
            <EditAdminView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditAdmin;
