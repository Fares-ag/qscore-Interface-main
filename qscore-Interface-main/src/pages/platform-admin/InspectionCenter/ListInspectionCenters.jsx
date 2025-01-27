import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/Sidebar/Sidebar";
import InspectionCentersView from "../../../views/platform-admin/InspectionCenter/InspectionCentersView";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import Filters from "../../../components/Filters/Filters";
import { PlusOutlined } from "@ant-design/icons";
import { fetchInspectionData, selectInspectionData, selectPagination, selectLoading } from "../../../store/slices/platformSlice";
import "../../PagesDesign.css"; // CSS module or external styles

const ListInspectionCenters = () => {
  const dispatch = useDispatch();

  // Redux state
  const data = useSelector(selectInspectionData); // Get data from Redux
  const pagination = useSelector(selectPagination); // Get pagination from Redux
  const loading = useSelector(selectLoading); // Get loading state from Redux

  const [filter, setFilter] = useState("All"); // Local state for filter

  // Fetch data when the component loads or pagination changes
  useEffect(() => {
    dispatch(fetchInspectionData(pagination.currentPage)); // Dispatch the Redux thunk
  }, [dispatch, pagination.currentPage]);

  // Handle filter change
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className="dashboard-container">
      <Topheader />
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Inspection Center Management"
              buttonLabel="Add Center"
              onButtonClick={() => console.log("Add Center Clicked")}
              buttonIcon={<PlusOutlined style={{ marginRight: "8px" }} />}
            />
            <Filters
              filterOptions={["All", "Active", "Inactive"]}
              onFilterChange={handleFilterChange}
            />
            <InspectionCentersView
              data={data} // Pass Redux state as props
              pagination={pagination}
              loading={loading}
              filter={filter}
              onPageChange={(page) => dispatch(fetchInspectionData(page))} // Dispatch Redux thunk on page change
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListInspectionCenters;