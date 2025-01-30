// AddNewCenter.jsx
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import EditDeviceView from "../../../views/platform-admin/Device/EditDeviceView";

const EditDevices = () => (
  <div className="dashboard-container">
    <Topheader />
    <div className="dashboard-body">
      <Sidebar />
      <div className="dashboard-main">
        <main className="dashboard-content">
          <EditDeviceView />
        </main>
      </div>
    </div>
  </div>
);

export default EditDevices;
