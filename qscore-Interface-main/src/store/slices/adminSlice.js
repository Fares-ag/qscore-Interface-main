import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// Async thunk for editing an admin
export const editAdminUser = createAsyncThunk(
  "admin/editAdminUser",
  async ({ userId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/platform/edit-admin/${userId}`,
        updatedData
      );
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update admin user details."
      );
    }
  }
);

// Async thunk for editing an inspection center
export const editInspectionCenter = createAsyncThunk(
  "admin/editInspectionCenter",
  async ({ centerId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/platform/edit-center/${centerId}`,
        updatedData
      );
      return response.data.center;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update inspection center details."
      );
    }
  }
);

// Async thunk for editing a branch
export const editBranch = createAsyncThunk(
  "admin/editBranch",
  async ({ branchId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/platform/branches/${branchId}`,
        updatedData
      );
      return response.data.branch;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update branch details."
      );
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminData: [],
    inspectionCenters: [],
    branches: [],
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    // Edit Admin User
    builder
      .addCase(editAdminUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(editAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedAdmin = action.payload;
        const index = state.adminData.findIndex((admin) => admin.id === updatedAdmin.id);
        if (index !== -1) {
          state.adminData[index] = updatedAdmin;
        }
        state.successMessage = "Admin user updated successfully.";
      })
      .addCase(editAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Edit Inspection Center
    builder
      .addCase(editInspectionCenter.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(editInspectionCenter.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCenter = action.payload;
        const index = state.inspectionCenters.findIndex((center) => center.id === updatedCenter.id);
        if (index !== -1) {
          state.inspectionCenters[index] = updatedCenter;
        }
        state.successMessage = "Inspection center updated successfully.";
      })
      .addCase(editInspectionCenter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Edit Branch
    builder
      .addCase(editBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(editBranch.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBranch = action.payload;
        const index = state.branches.findIndex((branch) => branch.id === updatedBranch.id);
        if (index !== -1) {
          state.branches[index] = updatedBranch;
        }
        state.successMessage = "Branch updated successfully.";
      })
      .addCase(editBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessages } = adminSlice.actions;
export default adminSlice.reducer;
