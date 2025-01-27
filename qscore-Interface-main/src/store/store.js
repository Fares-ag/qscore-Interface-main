import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence
import authReducer from "./slices/authSlice";
import platformReducer from "./slices/platformSlice";
import adminReducer from "./slices/adminSlice"; // New Admin Slice

// Configuration for Redux Persist
const authPersistConfig = {
  key: "auth", // Key for auth slice
  storage, // Use localStorage
  whitelist: ["token", "name", "email", "id", "profilePicture", "isLoggedIn"], // Fields to persist
};

const platformPersistConfig = {
  key: "platform", // Key for platform slice
  storage,
  whitelist: ["inspectionData", "pagination"], // Fields to persist
};

// Wrap reducers with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedPlatformReducer = persistReducer(platformPersistConfig, platformReducer);

// Configure the store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Auth slice with persistence
    platform: persistedPlatformReducer, // Platform slice with persistence
    admin: adminReducer, // New Admin slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for Redux Persist
    }),
});

export const persistor = persistStore(store); // Create the persistor
export default store;
