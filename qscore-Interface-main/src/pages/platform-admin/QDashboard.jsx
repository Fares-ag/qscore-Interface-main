import React from "react";
import { Switch } from "antd"; // Make sure to import Switch from Ant Design
import Sidebar from "../../components/Sidebar/Sidebar";
import Topheader from "../../components/Topheader";
import ChartEight from "../../components/Charts/ChartEight";
import ChartNine from "../../components/Charts/ChatNine";
import ChartSeven from "../../components/Charts/ChartSeven";
import DataStatsThree from "../../components/Charts/DataStatsThree";
import ChartOne from "../../components/Charts/ChartOne";
import ChartFour from "../../components/Charts/ChartFour";
import DataStatsFour from "../../components/Charts/DataStatsFour";
import UserDetailCard from "../../components/UserDetailCard";
import InspectionTable from "../../components/Tables/MainTable"; // Import InspectionTable

const QDashboard = () => {
  // Defining the columns to show in QDashboard
  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: (
        <span>
          <span style={{ fontWeight: "bold" }}>Email</span>{" "}
        </span>
      ),
      dataIndex: "email",
      align: "left",
      render: (text) => (
        <a href="#" style={{ textDecoration: "underline" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "contact",
      render: (contact) => <span className="revenue-cell">{contact}</span>,
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => <span className="revenue-cell">{role}</span>,
    },
    {
      title: "Assigned Branch",
      dataIndex: "branch",
      render: (branch) => <span className="revenue-cell">{branch}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Switch
          checked={status}
          onChange={(checked) => handleStatusChange(checked, record)}
        />
      ),
    },
  ];

  /* WithDrawal Table*/
  const Withdrawalcolumns = [
    { title: "Amount", dataIndex: "amount" },
    {
      title: (
        <span>
          <span style={{ fontWeight: "bold" }}>Email</span>{" "}
        </span>
      ),
      dataIndex: "amount",
      align: "left",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Submission Date",
      dataIndex: "date",
      render: (date) => <span className="revenue-cell">{date}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Switch
          checked={status}
          onChange={(checked) => handleStatusChange(checked, record)}
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (action) => <span className="revenue-cell">{action}</span>,
    },
  ];

  /*Branches Table*/
  const branchesTable = [
    { title: "Amount", dataIndex: "amount" },
    {
      title: (
        <span>
          <span style={{ fontWeight: "bold" }}>Email</span>{" "}
        </span>
      ),
      dataIndex: "amount",
      align: "left",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Submission Date",
      dataIndex: "date",
      render: (date) => <span className="revenue-cell">{date}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Switch
          checked={status}
          onChange={(checked) => handleStatusChange(checked, record)}
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (action) => <span className="revenue-cell">{action}</span>,
    },
  ];

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
            <UserDetailCard />
            <DataStatsThree />
            <DataStatsFour /> <br />
            <div className="col-span-12 xl:col-span-5">
              <ChartOne />
              <br />
            </div>
            <div className="col-span-12 xl:col-span-5">
              <ChartFour />
              <br />
            </div>
            {/* Inspection Table */}
            <InspectionTable columns={Withdrawalcolumns} />{" "}
            <InspectionTable columns={columns} /> {/* Pass columns as prop */}
            <div className="col-span-12 xl:col-span-5">
              <div className="col-span-12 xl:col-span-5">
                <ChartSeven />
              </div>
              <br />
            </div>
            {/* Pass columns as prop */}
            <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
              <div className="col-span-12 xl:col-span-5">
                <ChartNine />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default QDashboard;
