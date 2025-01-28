import React, { useState } from "react";
import Filters from "../../components/Filters/Filters";
import AdminHeader from "../../components/AdminHeader/AdminHead";
// import "./NewUser.css";
import ImageUpload from "../../components/ImageUpload";
import "./BankDetails.css";
import AddBankTable from "../../components/Tables/AddTables/AddBankTable";

const AddBankDetails = () => {
  const [showImageUpload, setShowImageUpload] = useState(false); // state to control the visibility of ImageUpload
  const [imageUrl, setImageUrl] = useState(null); // state to store uploaded image URL
  const [isPopupVisible, setPopupVisible] = useState(false); //Button pop up component

  // Handle button click to toggle the popup visibility
  const handleButtonClick = () => {
    setPopupVisible(true); // Show the popup when button is clicked
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setPopupVisible(false); // Hide the popup when closed
  };

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
      <AddBankTable
        title="Bank Information"
        buttonLabel="Go Back"
        onButtonClick={() => console.log("Back clicked")}
        showButton={false}
        formFields={[
          { label: "Bank Name", placeholder: "Enter Bank Name" },
          {
            label: "Bank Address",
            placeholder: "Enter Bank Address",
          },
          {
            label: "Account Holder Name ",
            placeholder: "Enter Full Name of Account Holder",
          },
          {
            label: "Account Number",
            placeholder: "Enter Account Number",
          },

          {
            label: "IBAN",
            type: "",
            placeholder: "Enter IBAN Number",
          },
          {
            label: "SWIFT Code",
            type: "",
            placeholder: "Enter Swift Code",
          },
        ]}
      />
    </div>
  );
};

export default AddBankDetails;
