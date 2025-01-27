// AddNewCenter.jsx
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AddInspectionCenterView from "../../../views/platform-admin/InspectionCenter/AddInspectionCenterView";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";

const AddNewCenter = () => (
  <div className="dashboard-container">
    <Topheader />
    <div className="dashboard-body">
      <Sidebar />
      <div className="dashboard-main">
        <main className="dashboard-content">
          <AddInspectionCenterView />
        </main>
      </div>
    </div>
  </div>
);

export default AddNewCenter;
