import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = import.meta.env.VITE_API_URL;

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/api/platform/login`, {
        email,
        password,
      });

      const { token, admin } = response.data;

      // Save token and user details to cookies
      Cookies.set("token", token, { expires: 7 });
      Cookies.set("name", admin.name);
      Cookies.set("email", admin.email);
      Cookies.set("id", admin.id);
      Cookies.set("profilePicture", admin.profilePicture || "default-profile-pic.jpg");

      return { token, admin };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Selector to get user details
export const selectUserDetails = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  profilePicture: state.auth.profilePicture,
});

// Initial state
const initialState = {
  token: null,
  name: null,
  email: null,
  id: null,
  profilePicture: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.name = null;
      state.email = null;
      state.id = null;
      state.profilePicture = null;
      state.isLoggedIn = false;
      state.error = null;

      // Clear cookies on logout
      Cookies.remove("token");
      Cookies.remove("name");
      Cookies.remove("email");
      Cookies.remove("id");
      Cookies.remove("profilePicture");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.name = action.payload.admin.name;
        state.email = action.payload.admin.email;
        state.id = action.payload.admin.id;
        state.profilePicture =
          action.payload.admin.profilePicture || "default-profile-pic.jpg";
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;