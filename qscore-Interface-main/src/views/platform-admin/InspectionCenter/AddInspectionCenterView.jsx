import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createInspectionCenter } from "../../../store/slices/platformSlice";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import AddCenterTable from "../../../components/Tables/AddTables/AddCenterTable";
import { message } from "antd";

const AddInspectionCenterView = () => (
  <div>
    <AdminHeader showButton={false} />
    <AddCenterTable
      title="General Information"
      text="Go Back"
      onButtonClick={() => console.log("Back clicked")}
      formFields={[
        { label: "Full Name*", placeholder: "Enter name of Admin" },
        { label: "Add Photo", type: "file", placeholder: "Add A Photo" },
        {
          label: "Email Address",
          isCustomInput: true,
          staticText: "www.qplate.io/places:",
          placeholder: "Enter Email here",
        },
        { label: "Phone Number*", type: "tel", placeholder: "+974" },
        {
          label: "Role",
          type: "select",
          placeholder: "Select Role",
          options: ["Admin", "Manager", "User", "Supervisor"],
        },
        { label: "Status", type: "text", placeholder: "Active" },
        { label: "Password*", type: "password", placeholder: "Enter Password" },
        {
          label: "Reconfirm Password*",
          type: "password",
          placeholder: "Re-Enter Password",
        },
        { label: "Commission Rate", type: "number", placeholder: "30%" },
        {
          label: "Upload Contract",
          type: "file",
          placeholder: "Upload Contract",
        },
      ]}
    />
  </div>
);

export default AddInspectionCenterView;
