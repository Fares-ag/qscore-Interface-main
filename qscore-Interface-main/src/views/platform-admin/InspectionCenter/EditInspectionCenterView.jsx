import React from "react";
import { useParams } from "react-router-dom";
import EditCenterTable from "../../../components/Tables/EditTables/EditCenterTable";
import AdminHeader from "../../../components/AdminHeader/AdminHead";

const EditInspectionCenterView = () => {
  const { centerId } = useParams(); // Dynamically fetch centerId from the route

  return (
    <div>
      <AdminHeader showButton={false} />
      <EditCenterTable
        title="General Information"
        centerId={centerId} // Pass centerId here
        buttonLabel="Go Back"
        onButtonClick={() => console.log("Back clicked")}
        formFields={[
          { label: "name", placeholder: "Enter center name", props: { required: true } },
          { label: "phoneNumber", placeholder: "Enter phone number", type: "tel" },
          { label: "qPlateAddress", placeholder: "Enter QPlate address" },
          { label: "contactPersonPhone", placeholder: "Enter contact person phone" },
          { label: "contactPersonName", placeholder: "Enter contact person name" },
          { label: "email", placeholder: "Enter email", type: "email" },
          { label: "CRNumber", placeholder: "Enter CR number" },
          { label: "revenuePercentage", placeholder: "Enter revenue percentage", type: "number" },
          { label: "contractDetails", type: "file", placeholder: "Upload contract details" },
        ]}
      />
    </div>
  );
};

export default EditInspectionCenterView;
