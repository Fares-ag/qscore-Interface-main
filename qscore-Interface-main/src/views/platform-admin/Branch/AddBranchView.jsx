import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBranchTable from "../../../components/Tables/AddTables/AddBranchTable";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import Modal from "../../../components/Modal/Modal";
import TimeSelection from "../../../components/TimeSelection";
import {
  fetchInspectionData,
  selectInspectionData,
} from "../../../store/slices/platformSlice";

const AddBranchView = () => {
  const dispatch = useDispatch();
  const centers = useSelector(selectInspectionData); // Select centers from Redux
  const [isModalOpen, setModalOpen] = useState(false);
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    // Fetch centers from API on component mount
    dispatch(fetchInspectionData());
  }, [dispatch]);

  useEffect(() => {
    // Update form fields with dynamic center options
    setFormFields([
      {
        label: "Center Name",
        type: "select",
        options: centers.map((center) => ({
          label: center.name, // Display name
          value: center.id, // Corresponding centerId
        })),
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
        label: "Branch Phone Number*",
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
        label: "Email",
        type: "email",
        placeholder: "Enter Email",
        props: { required: true },
      },
      {
        label: "Operating Hours",
        type: "button",
        placeholder: "Enter Working Hours",
        onClick: () => setModalOpen(true),
      },
    ]);
  }, [centers]);

  const handleSave = () => {
    console.log("Branch saved successfully!");
  };

  return (
    <div>
      <AdminHeader showButton={false} />
      <AddBranchTable
        title="General Information"
        formFields={formFields}
        showSubmitButton={true}
        onSave={handleSave}
      />
      {/* Modal for Operating Hours */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <TimeSelection />
      </Modal>
    </div>
  );
};

export default AddBranchView;
