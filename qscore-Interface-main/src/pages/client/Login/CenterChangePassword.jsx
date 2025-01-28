import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import NewUser from "../../../views/client/AddCenterUserView";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import ImageUpload from "../../../components/ImageUpload";
import AddBankDetails from "../../../views/client/AddBankDetails";
import SuccessAddBank from "../../../components/SuccessAddBank";
import CenterChangePasswordTable from "../../../views/client/CenterChangePasswordTable";

const CenterChangePassword = () => {
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
              title="Change Password" // Dynamic title
              buttonLabel="Edit" // Dynamic button label // Attach button handler
              showButton={false}
            />
            {/*No Bank Table */}
            <CenterChangePasswordTable />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CenterChangePassword;
