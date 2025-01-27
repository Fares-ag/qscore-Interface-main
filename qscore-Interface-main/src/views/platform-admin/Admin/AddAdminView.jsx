import React from "react";
import Filters from "../../../components/Filters/Filters";
import AddUserTable from "../../../components/Tables/AddTables/AddUserTable";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import "./AddAdminView.css";

const AddAdminView = () => (
  <div>
    <AdminHeader showButton={false} />
    <AddUserTable
      title="General Information"
      buttonLabel="Go Back"
      onButtonClick={() => console.log("Back clicked")}
      formFields={[
        { label: "firstName", placeholder: "Enter first name" },
        { label: "lastName", placeholder: "Enter last name" },
        { label: "email", placeholder: "Enter email" },
        { label: "phoneNumber", placeholder: "Enter phone number", type: "tel" },
        {
          label: "role",
          type: "select",
          placeholder: "Select role",
          options: ["platformAdmin", "superAdmin", "adminUser"],
        },
        {
          label: "profilePicture",
          placeholder: "Upload profile picture",
          type: "file",
        },
        { label: "password", type: "password", placeholder: "Enter password" },
        {
          label: "confirmPassword",
          type: "password",
          placeholder: "Confirm password",
        },
        {
          label: "isActive",
          type: "select",
          placeholder: "Select status",
          options: ["true", "false"],
        },
      ]}
    />
  </div>
);


export default AddAdminView;