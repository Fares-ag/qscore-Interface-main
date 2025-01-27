import React, { useState } from "react";
import AddBranchTable from "../../components/Tables/AddTables/AddBranchTable";
import AdminHeader from "../../components/AdminHeader/AdminHead";
import Modal from "../../components/Modal/Modal"; // Import the modal if needed
import TimeSelection from "../../components/TimeSelection";
import EditBranchTable from "../../components/Tables/EditTables/EditBranchTable";

const EditCenterBranchView = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOperatingHoursClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    // Implement any save logic here
    console.log("Branch saved successfully!");
    // The SuccessAddBranch modal will be shown by AddBranchTable via onSave
  };

  return (
    <div>
      <AdminHeader showButton={false} />
      <EditBranchTable
        title="General Information"
        formFields={[
          {
            label: "Center Name", // Add your dynamic list of centers here
            placeholder: "Select Center",
            props: { required: true },
          },
          {
            label: "Branch Name*",
            placeholder: "Enter Branch Name",
            props: { required: true },
          },
          {
            label: "Address",
            isCustomInput: true,
            staticText: "www.qplate.io/places:",
            placeholder: "33-145-80",
            props: { required: true },
          },
          {
            label: "Center Phone Number*",
            type: "tel",
            placeholder: "+974",
            props: { required: true },
          },
          {
            label: "Contact Person",
            placeholder: "Enter Name",
            props: { required: true },
          },
          {
            label: "Contact Number*",
            type: "tel",
            placeholder: "+974",
            props: { required: true },
          },
          {
            label: "Email Address",
            type: "email",
            placeholder: "Enter Email",
            props: { required: true },
          },
          {
            label: "Operating Hours",
            type: "button",
            placeholder: "Enter Working Hours",
            onClick: handleOperatingHoursClick,
          },
        ]}
        showSubmitButton={true}
        onSave={handleSave} // Pass save handler
      />
      {/* Modal for Operating Hours */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TimeSelection />
      </Modal>
    </div>
  );
};

export default EditCenterBranchView;
