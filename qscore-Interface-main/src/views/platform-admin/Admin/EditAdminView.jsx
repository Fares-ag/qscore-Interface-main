import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import EditUserTable from "../../../components/Tables/EditTables/EditUserTable";
import AdminHeader from "../../../components/AdminHeader/AdminHead";

const EditAdminView = () => {
  const { userId } = useParams(); // Extract userId from URL

  return (
    <div>
      <AdminHeader showButton={false} />
      <EditUserTable
        title="General Information"
        userId={userId} // Pass userId dynamically
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
};

export default EditAdminView;
