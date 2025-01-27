// AddNewCenter.jsx
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import AddDeviceView from "../../../views/platform-admin/Device/AddDeviceView";

const  AddNewDevice = () => (
  <div className="dashboard-container">
    <Topheader />
    <div className="dashboard-body">
      <Sidebar />
      <div className="dashboard-main">
        <main className="dashboard-content">
          <AddDeviceView />
        </main>
      </div>
    </div>
  </div>
);

export default AddNewDevice;
