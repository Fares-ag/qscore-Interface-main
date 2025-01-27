import React, { useState } from "react";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import Modal from "../../../components/Modal/Modal"; // Import the modal if needed
import TimeSelection from "../../../components/TimeSelection";
import AddDeviceTable from "../../../components/Tables/AddTables/AddDeviceTable";
// import { addDevice } from "../store/slices/deviceSlice";
import { useDispatch } from "react-redux";
import { message } from "antd";

const AddDeviceView = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOperatingHoursClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = async () => {
    if (validateForm()) {
      try {
        const transformedData = Object.entries(formData).reduce(
          (acc, [key, value]) => {
            const backendKey = fieldToBackendKeyMap[key] || key;
            acc[backendKey] = value;
            return acc;
          },
          {}
        );
  
        const response = await dispatch(addDevice(transformedData)).unwrap();
        console.log("Device added successfully:", response);
  
        message.success("Device added successfully!");
        setShowSuccess(true);
        setFormData({});
        onSave();
      } catch (error) {
        console.error("Error adding device:", error);
        // Extract a string message
        const errorMessage =
          typeof error === "string"
            ? error
            : error?.message || "An unexpected error occurred.";
        message.error(errorMessage);
      }
    }
  };
  
  
  

  const handleValidation = (event) => {
    if (!event.target.value) {
      event.target.setCustomValidity(
        "Please select a device type before proceeding."
      );
    } else {
      event.target.setCustomValidity("");
    }
  };

  return (
    <div>
      <AdminHeader
        title="Add A New Device" // Dynamic title
        buttonLabel="Cancel" // Dynamic button label // Attach button handler
        buttonClass="cancel-button"
        showButton={true}
      />
      <AddDeviceTable
        title="General Information"
        formFields={[
          {
            label: "Device Type",
            type: "select",
            options: ["Tablet", "Scanner"], // Add your dynamic list of centers here
            placeholder: "Select Device",
            props: { required: true },
          },
          {
            label: "Device Serial Number*",
            type: "tel",
            placeholder: "Enter Serial Number",
            props: { required: true },
          },
          {
            label: "Purchase Date",
            type: "date",
            placeholder: "Select Date",
            props: { required: true },
          },
          {
            label: "Added By*",
            type: "name",
            placeholder: "",
            props: { required: true },
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

export default AddDeviceView;
