import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import LoginSignup from "./pages/platform-admin/LoginSignUp/LoginSignup";
import LoginHeader from "./components/LoginHeader";
import CenterLogin from "./pages/client/Login/CenterLogin";
import AddCenterLayout from "./pages/platform-admin/InspectionCenter/AddNewCenter";
import QDashboard from "./pages/platform-admin/QDashboard";
import BranchManagement from "./pages/platform-admin/Branch/ListBranches";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "./satoshi.css";
import "./simple-datatables.css";
import "./style.css";
import ListAdmins from "./pages/platform-admin/Admin/ListAdmins";
import ListInspectionCenters from "./pages/platform-admin/InspectionCenter/ListInspectionCenters";
import ListBranches from "./pages/platform-admin/Branch/ListBranches";
import ListDevices from "./pages/platform-admin/Device/ListDevices";
import AddNewUser from "./pages/platform-admin/Admin/AddNewUser";
import EditAdmin from "./pages/platform-admin/Admin/EditAdmin";
import AddNewCenter from "./pages/platform-admin/InspectionCenter/AddNewCenter";
import AddBranch from "./pages/platform-admin/Branch/AddBranch";
import DeviceManagement from "./pages/platform-admin/Device/ListDevices";
import AddNewDevice from "./pages/platform-admin/Device/AddNewDevice";
import ListCenterBranches from "./pages/client/Branch/ListCenterBranches";
import EditCenterBranch from "./pages/client/Branch/EditCenterBranch";
import BranchStaff from "./pages/client/Branch/BranchStaff";
import AddCenterUser from "./pages/client/User/AddCenterUser";
import EditCenter from "./pages/platform-admin/InspectionCenter/EditCenter";
import EditBranch from "./pages/platform-admin/Branch/EditBranch";
import ListCenterDevices from "./pages/client/Device/ListCenterDevices";
import ListCenterUsers from "./pages/client/User/ListCenterUsers";
import AdminDispute from "./pages/AdminDispute";
import CenterAppointment from "./pages/CenterAppointment";
import DisputeDetail from "./pages/DisputeDetail";
import ViewBank from "./pages/client/Bank/ViewBank";
import AddBank from "./pages/client/Bank/AddBank";
import EditBank from "./pages/client/Bank/EditBank";
import NoBank from "./pages/client/Bank/NoBank";
import ProfileDetails from "./pages/client/Profile/ProfileDetails";
import CenterChangePassword from "./pages/client/Login/CenterChangePassword";
import CenterMyAccount from "./pages/client/Account/CenterMyAccount";
import EditDeviceView from "./views/platform-admin/Device/EditDeviceView";
import EditDevices from "./pages/platform-admin/Device/EditDevices";

const App = () => {
  // Checking if the user is logged in using localStorage or another auth state
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="" /> : <LoginSignup />}
        />
        <Route
          path="/center-login"
          element={isAuthenticated ? <Navigate to="" /> : <CenterLogin />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Navigate to="" /> : <QDashboard />}
        />
        <Route
          path="/view-centers"
          element={
            isAuthenticated ? <Navigate to="" /> : <ListInspectionCenters />
          }
        />
        <Route
          path="/add-center"
          element={isAuthenticated ? <Navigate to="" /> : <AddNewCenter />}
        />
        <Route
          path="/edit-center/:centerId"
          element={isAuthenticated ? <Navigate to="" /> : <EditCenter />}
        />
        <Route
          path="/view-admins"
          element={isAuthenticated ? <Navigate to="" /> : <ListAdmins />}
        />
        <Route
          path="/add-admin"
          element={isAuthenticated ? <Navigate to="" /> : <AddNewUser />}
        />
        <Route
          path="/edit-admin/:userId"
          element={isAuthenticated ? <Navigate to="" /> : <EditAdmin />}
        />
        <Route
          path="/view-branches"
          element={isAuthenticated ? <Navigate to="" /> : <ListBranches />}
        />
        <Route
          path="/add-branch"
          element={isAuthenticated ? <Navigate to="" /> : <AddBranch />}
        />
        <Route
          path="/edit-branch/:branchId"
          element={isAuthenticated ? <Navigate to="" /> : <EditBranch />}
        />
        <Route
          path="/view-devices"
          element={isAuthenticated ? <Navigate to="" /> : <ListDevices />}
        />
        <Route
          path="/add-device"
          element={isAuthenticated ? <Navigate to="" /> : <AddNewDevice />}
        />
        <Route
          path="/edit-device"
          element={isAuthenticated ? <Navigate to="" /> : <EditDevices />}
        />
        <Route
          path="/center/view-users"
          element={isAuthenticated ? <Navigate to="" /> : <ListCenterUsers />}
        />
        <Route
          path="/center/view-devices"
          element={isAuthenticated ? <Navigate to="" /> : <ListCenterDevices />}
        />
        <Route
          path="/center/view-branches"
          element={
            isAuthenticated ? <Navigate to="" /> : <ListCenterBranches />
          }
        />
        <Route
          path="/center/edit-branch/:branchId"
          element={isAuthenticated ? <Navigate to="" /> : <EditCenterBranch />}
        />
        <Route
          path="/center/view-branch-staff"
          element={isAuthenticated ? <Navigate to="" /> : <BranchStaff />}
        />
        <Route
          path="/center/add-user"
          element={isAuthenticated ? <Navigate to="" /> : <AddCenterUser />}
        />
        <Route
          path="/center-appointment"
          element={isAuthenticated ? <Navigate to="" /> : <CenterAppointment />}
        />
        <Route
          path="/admin-dispute"
          element={isAuthenticated ? <Navigate to="" /> : <AdminDispute />}
        />
        <Route
          path="/admin-dispute-detail"
          element={isAuthenticated ? <Navigate to="" /> : <DisputeDetail />}
        />
        <Route
          path="/center-bank"
          element={isAuthenticated ? <Navigate to="" /> : <ViewBank />}
        />
        <Route
          path="/center-add-bank"
          element={isAuthenticated ? <Navigate to="" /> : <AddBank />}
        />
        <Route
          path="/center-edit-bank"
          element={isAuthenticated ? <Navigate to="" /> : <EditBank />}
        />
        <Route
          path="/center-no-bank"
          element={isAuthenticated ? <Navigate to="" /> : <NoBank />}
        />
        <Route
          path="/center-profile-details"
          element={isAuthenticated ? <Navigate to="" /> : <ProfileDetails />}
        />
        <Route
          path="/center-change-password"
          element={
            isAuthenticated ? <Navigate to="" /> : <CenterChangePassword />
          }
        />
        <Route
          path="/center-my-account"
          element={isAuthenticated ? <Navigate to="" /> : <CenterMyAccount />}
        />
      </Routes>
    </Router>
  );
};

// Component to conditionally render the Header
const ConditionalHeader = () => {
  const location = useLocation();

  // Define pages where the Header should NOT be shown
  const noHeaderPaths = ["/Admin"];

  // Check if current path is in the no-header list
  if (noHeaderPaths.includes(location.pathname)) {
    return null; // Do not render the header
  }
};

export default App;
