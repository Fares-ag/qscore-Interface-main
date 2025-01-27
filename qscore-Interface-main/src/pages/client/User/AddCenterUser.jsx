import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import NewUser from "../../../views/client/AddCenterUserView";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import AddCenterUserView from "../../../views/client/AddCenterUserView";
import ImageUpload from "../../../components/ImageUpload";

const AddCenterUser = () => {
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
              title="Add New User" // Dynamic title
              buttonLabel="Cancel" // Dynamic button label // Attach button handler
              showButton={true}
            />
            <AddCenterUserView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddCenterUser;
