import React from "react";
import { useParams } from "react-router-dom";
import EditBranchTable from "../../../components/Tables/EditTables/EditBranchTable";
import AdminHeader from "../../../components/AdminHeader/AdminHead";

const EditBranchView = () => {
  const { branchId } = useParams(); // Get branchId from the URL

  return (
    <div>
      <AdminHeader showButton={false} />
      <EditBranchTable
        title="General Information"
        branchId={branchId} // Pass branchId here
        formFields={[
          { label: "name", placeholder: "Enter branch name", props: { required: true } },
          { label: "address", placeholder: "Enter branch address", props: { required: true } },
          { label: "phoneNumber", placeholder: "Enter branch phone number", type: "tel" },
          { label: "contactPerson", placeholder: "Enter contact person name" },
          { label: "email", placeholder: "Enter email", type: "email" },
          { label: "operatingHours", placeholder: "Enter operating hours" },
        ]}
      />
    </div>
  );
};

export default EditBranchView;
