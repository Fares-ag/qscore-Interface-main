import React, { useState } from "react";
import Filters from "../../components/Filters/Filters";
import AdminHeader from "../../components/AdminHeader/AdminHead";
// import "./NewUser.css";
import ImageUpload from "../../components/ImageUpload"; // Import ImageUpload component
import BankTable from "../../components/Tables/AddTables/BankTable";
import "./BankDetails.css";

const BankDetails = () => {
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isFormDisabled, setIsFormDisabled] = useState(true); // Add state to control form disable

  const handleUploadClick = () => {
    setShowImageUpload(true);
  };

  const handleImageUpload = (url) => {
    setImageUrl(url);
    setShowImageUpload(false);
  };

  return (
    <div>
      <AdminHeader showButton={false} />
      <BankTable
        title="Bank Information"
        buttonLabel="Go Back"
        onButtonClick={() => console.log("Back clicked")}
        showButton={false}
        formFields={[
          { label: "Bank Name", placeholder: "Doha Bank" },
          {
            label: "Bank Address",
            placeholder: "Old Airport",
          },
          { label: "Account Holder Name", placeholder: "Fares Salaam Ahmed" },
          { label: "Account Number", placeholder: "00001234567890" },
          { label: "IBAN", placeholder: "QA58DOHB00001234567890ABCDEFG" },
          {
            label: "SWIFT Code",
            className: "swift-code-field",
            placeholder: "AAA-BB-CC-123",
          },
        ]}
        isDisabled={isFormDisabled} // Pass isDisabled to BankTable
      />
      {showImageUpload && (
        <div className="image-upload-modal">
          <ImageUpload onUpload={handleImageUpload} />
          <button onClick={() => setShowImageUpload(false)}>Close</button>
        </div>
      )}

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

export default BankDetails;
