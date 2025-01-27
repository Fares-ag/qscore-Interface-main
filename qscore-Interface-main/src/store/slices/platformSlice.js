import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

// Fetch data from the API
export const fetchInspectionData = createAsyncThunk(
    'platform/fetchInspectionData',
    async (page = 1, thunkAPI) => {
    try {
        console.log("Here")
      const response = await axios.get(`${apiUrl}/api/platform/centers`); // Replace with your API URL
      console.log(response)
      return response.data; // Pass the entire response object to handle both data and paginations
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  }
);

export const fetchAdminUsers = createAsyncThunk(
  "platform/fetchAdminUsers",
  async ({ role, isActive, search, page = 1, limit = 10 }, thunkAPI) => {
    try {
      const response = await axios.get(`${apiUrl}/api/platform/admin-users`, {
        params: { role, isActive, search, page, limit },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch admin users"
      );
    }
  }
);
// Toggle the status of an inspection center
export const toggleInspectionCenterStatus = createAsyncThunk(
    'platform/toggleInspectionCenterStatus',
    async ({ id, currentStatus }, thunkAPI) => {
      try {
        const response = await axios.put(`${apiUrl}/api/platform/toggle-center/${id}`, {
          isActive: !currentStatus,
        });
        return { id, isActive: !currentStatus }; // Return the updated status
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to toggle status');
      }
    }
  );

  export const createInspectionCenter = createAsyncThunk(
    'platform/createInspectionCenter',
    async (formData, thunkAPI) => {
      try {
        const response = await axios.post(`${apiUrl}/api/platform/create-center`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Required for file uploads
          },
        });
        return response.data; // Return the created center data
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to create center');
      }
    }
  );
  export const toggleUserActivation = createAsyncThunk(
    'platform/toggleUserActivation',
    async (userId, thunkAPI) => {
      try {
        const response = await axios.put(`${apiUrl}/api/platform/toggle-user-state/${userId}`);
        return response.data.user; // Return the updated user details
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to toggle user activation');
      }
    }
  );
  export const addAdminUser = createAsyncThunk(
    'platform/addAdminUser',
    async (newAdminData, { rejectWithValue }) => {
      try {
        const formData = new FormData();
        for (const key in newAdminData) {
          formData.append(key, newAdminData[key]);
        }
  
        const response = await axios.post(`${apiUrl}/api/platform/add-admin`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
  
        return response.data.user; // Return the new user data
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to add admin user');
      }
    }
  );

  export const editAdminUser = createAsyncThunk(
    'platform/editAdminUser',
    async ({ userId, updatedData }, thunkAPI) => {
      try {
        const response = await axios.put(
          `${apiUrl}/api/platform/edit-admin/${userId}`,
          updatedData
        );
        return response.data.user; // Return the updated user data
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || 'Failed to update user details'
        );
      }
    }
  );

  export const fetchBranches = createAsyncThunk(
    'platform/fetchBranches',
    async ({ center, status, search, page = 1, limit = 10 }, thunkAPI) => {
      try {
        const response = await axios.get(`${apiUrl}/api/platform/branches`, {
          params: { center, status, search, page, limit },
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data || 'Failed to fetch branches'
        );
      }
    }
  );

  export const toggleBranchStatus = createAsyncThunk(
    'branches/toggleBranchStatus',
    async ({ id, isActive }, { rejectWithValue }) => {
      try {
        const response = await axios.put(`${apiUrl}/api/platform/branches/toggle-status/${id}`, {
          isActive: !isActive,
        });
        console.log("API Response:", response.data); // Debug response
        return { id, isActive: !isActive }; // Return updated data
      } catch (error) {
        console.error("API Error:", error.response?.data || error.message); // Log error
        return rejectWithValue(error.response?.data || 'Failed to toggle branch status');
      }
    }
  );
  export const addBranch = createAsyncThunk(
    "branches/addBranch",
    async (branchData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${apiUrl}/api/platform/create-branch`, branchData);
        return response.data.branch; // Return the created branch data
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to add branch"
        );
      }
    }
  );
  
  export const fetchDevices = createAsyncThunk(
    "platform/fetchDevices",
    async ({ status, centerId, branchId, page = 1, limit = 10 }, thunkAPI) => {
      try {
        const response = await axios.get(`${apiUrl}/api/platform/devices`, {
          params: { status, centerId, branchId, page, limit },
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data || "Failed to fetch devices."
        );
      }
    }
  );

  export const addDevice = createAsyncThunk(
    "platform/addDevice",
    async (deviceData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${apiUrl}/api/platform/devices`, deviceData);
        console.log("API Response:", response.data); // Debug API response
        return response.data.device;
      } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return rejectWithValue(
          error.response?.data?.message || "Failed to add device."
        );
      }
    }
  );
  
  

const platformSlice = createSlice({
  name: "platform",
  initialState: {
    inspectionData: [],
    adminUsers: [],
    branchesData: [],
    devicesData: [],
    pagination: {
      currentPage: 1,
      pageSize: 10,
      totalPages: 1,
      totalItems: 0,
    },
    adminPagination: {
      currentPage: 1,
      pageSize: 10,
      totalPages: 1,
      totalItems: 0,
    }, branchesPagination: {
      currentPage: 1,
      pageSize: 10,
      totalPages: 1,
      totalItems: 0,
    },
    devicesPagination: {
      currentPage: 1,
      pageSize: 10,
      totalPages: 1,
      totalItems: 0,
    },
    loading: false,
    error: null,
    devicesLoading: false,
    devicesError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInspectionData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInspectionData.fulfilled, (state, action) => {
        state.loading = false;
        state.inspectionData = action.payload.data || [];
        state.pagination = action.payload.pagination || state.pagination;
      })
      .addCase(fetchInspectionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch data';
      }).addCase(toggleInspectionCenterStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggleInspectionCenterStatus.fulfilled, (state, action) => {
        state.loading = false;
        const { id, isActive } = action.payload;
        const center = state.inspectionData.find((item) => item.id === id);
        if (center) {
          center.isActive = isActive; // Update the status directly in the state
        }
      })
      .addCase(toggleInspectionCenterStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to toggle status';
      })
      // New case for createInspectionCenter
      .addCase(createInspectionCenter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInspectionCenter.fulfilled, (state, action) => {
        state.loading = false;
        state.inspectionData.push(action.payload.center); // Add the new center to the list
      })
      .addCase(createInspectionCenter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create center';
      }).addCase(fetchAdminUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.adminUsers = action.payload.users || [];
        state.adminPagination = action.payload.pagination || state.adminPagination;
      })
      .addCase(fetchAdminUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch admin users";
      }) .addCase(toggleUserActivation.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggleUserActivation.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        // Update the specific user's activation status in the state
        const userIndex = state.adminUsers.findIndex((user) => user.id === updatedUser.id);
        if (userIndex !== -1) {
          state.adminUsers[userIndex] = updatedUser;
        }
      })
      .addCase(toggleUserActivation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to toggle user activation';
      }).addCase(addAdminUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        state.adminUsers = [action.payload, ...state.adminUsers]; // Add the new user to the list
        state.pagination.totalItems += 1; // Increment the total items count
        message.success('Admin user added successfully!');
      })
      .addCase(addAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add admin user';
        message.error(state.error);
      }) .addCase(editAdminUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        // Update the user in the state
        const updatedUser = action.payload;
        const userIndex = state.adminUsers.findIndex(
          (user) => user.id === updatedUser.id
        );
        if (userIndex > -1) {
          state.adminUsers[userIndex] = updatedUser;
        }
      })
      .addCase(editAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(fetchBranches.pending, (state) => {
        state.branchesLoading = true;
        state.branchesError = null;
      })
      .addCase(fetchBranches.fulfilled, (state, action) => {
        state.branchesLoading = false;
        state.branchesData = action.payload.data || [];
        state.branchesPagination = action.payload.pagination || state.branchesPagination;
      })
      .addCase(fetchBranches.rejected, (state, action) => {
        state.branchesLoading = false;
        state.branchesError = action.payload || 'Failed to fetch branches';
      }) .addCase(toggleBranchStatus.pending, (state) => {
        state.branchesLoading = true;
      })
      .addCase(toggleBranchStatus.fulfilled, (state, action) => {
        const { id, isActive } = action.payload;
      
        const branch = state.branchesData.find((branch) => branch._id === id);
        if (branch) {
          branch.isActive = isActive; // Update local status
        }
      
        state.loading = false; // Stop global loading on success
      })
      .addCase(toggleBranchStatus.rejected, (state, action) => {
        state.loading = false; // Stop global loading on failure
        state.error = action.payload || "Failed to toggle branch status";
      })
      .addCase(addBranch.pending, (state) => {
        state.branchesLoading = true;
        state.branchesError = null;
      })
      .addCase(addBranch.fulfilled, (state, action) => {
        state.branchesLoading = false;
        state.branchesData = [action.payload, ...state.branchesData]; // Prepend the new branch
      })
      .addCase(addBranch.rejected, (state, action) => {
        state.branchesLoading = false;
        state.branchesError = action.payload;
      }) .addCase(fetchDevices.pending, (state) => {
        state.devicesLoading = true;
        state.devicesError = null;
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.devicesLoading = false;
        state.devicesData = action.payload.devices || [];
        state.devicesPagination =
          action.payload.pagination || state.devicesPagination;
      })
      .addCase(fetchDevices.rejected, (state, action) => {
        state.devicesLoading = false;
        state.devicesError = action.payload || "Failed to fetch devices.";
      })
      .addCase(addDevice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.devicesData = [action.payload, ...state.devicesData]; // Prepend the new device
        state.pagination.totalItems += 1; // Increment total count
        message.success('Device added successfully!');
      })
      .addCase(addDevice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add device';
        message.error(state.error);
      });
  },
});

// Selectors for admin users
export const selectAdminUsers = (state) => state.platform.adminUsers;
export const selectAdminPagination = (state) => state.platform.adminPagination;
export const selectAdminLoading = (state) => state.platform.loading;
export const selectAdminError = (state) => state.platform.error;

// Existing selectors
export const selectInspectionData = (state) => state.platform.inspectionData;
export const selectPagination = (state) => state.platform.pagination;
export const selectLoading = (state) => state.platform.loading;
export const selectError = (state) => state.platform.error;

export const selectBranchesData = (state) => state.platform.branchesData;
export const selectBranchesPagination = (state) =>
  state.platform.branchesPagination;
export const selectBranchesLoading = (state) => state.platform.loading;
export const selectBranchesError = (state) => state.platform.error;

export const selectDevicesData = (state) => state.platform.devicesData;
export const selectDevicesPagination = (state) =>
  state.platform.devicesPagination;
export const selectDevicesLoading = (state) => state.platform.devicesLoading;
export const selectDevicesError = (state) => state.platform.devicesError;
export default platformSlice.reducer;