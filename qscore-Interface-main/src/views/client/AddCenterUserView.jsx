import React, { useState } from "react";
import Filters from "../../components/Filters/Filters";
import AddUserTable from "../../components/Tables/AddTables/AddUserTable";
import AdminHeader from "../../components/AdminHeader/AdminHead";
// import "./NewUser.css";
import ImageUpload from "../../components/ImageUpload"; // Import ImageUpload component

const AddCenterUserView = () => {
  const [showImageUpload, setShowImageUpload] = useState(false); // state to control the visibility of ImageUpload
  const [imageUrl, setImageUrl] = useState(null); // state to store uploaded image URL

  const handleUploadClick = () => {
    setShowImageUpload(true); // Show ImageUpload when clicked
  };

  const handleImageUpload = (url) => {
    setImageUrl(url); // Store the uploaded image URL in state
    setShowImageUpload(false); // Close the ImageUpload modal after uploading
  };

  return (
    <div>
      <div>
        <AdminHeader showButton={false} />
      </div>
      {/* Table */}
      <AddUserTable
        title="General Information"
        buttonLabel="Go Back"
        onButtonClick={() => console.log("Back clicked")}
        showButton={false}
        formFields={[
          { label: "Full Name*", placeholder: "Enter name of Admin" },
          {
            label: "Upload Photo",
            placeholder: "Add A Photo",
            onClick: handleUploadClick, // Make the field clickable
          },
          { label: "Email Address", placeholder: "Enter Email here" },
          { label: "Phone Number*", type: "tel", placeholder: "+974" },
          {
            label: "Role",
            type: "dropdown",
            placeholder: "Role of User",
            render: () => (
              <Select placeholder="Select Role">
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
                <Option value="manager">Manager</Option>
              </Select>
            ),
          },
          {
            label: "Permissions",
            type: "dropdown",
            placeholder: "Role of User",
            render: () => (
              <Select placeholder="Permissions for User">
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
                <Option value="manager">Manager</Option>
              </Select>
            ),
          },
          {
            label: "Password*",
            type: "password",
            placeholder: "Enter Password",
          },
          {
            label: "Reconfirm Password*",
            type: "password",
            placeholder: "Re-Enter Password",
          },
          {
            label: "Assign to Branch",
            type: "dropdown",
            placeholder: "Select Branch",
            className: "half-width",
            render: () => (
              <Select placeholder="Select Branch">
                <Option value="branch1">Branch 1</Option>
                <Option value="branch2">Branch 2</Option>
                <Option value="branch3">Branch 3</Option>
              </Select>
            ),
          },
        ]}
      />
      {showImageUpload && (
        <div className="image-upload-modal">
          <ImageUpload onUpload={handleImageUpload} />{" "}
          {/* Pass the handler to ImageUpload */}
          <button onClick={() => setShowImageUpload(false)}>Close</button>
        </div>
      )}

      {/* Display uploaded image below the upload field */}
      {imageUrl && (
        <div className="uploaded-image">
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      )}
    </div>
  );
};

export default AddCenterUserView;
