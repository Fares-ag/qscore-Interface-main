
import React from "react";
import { Box, Typography, TextField, Button, Avatar } from "@mui/material";

export default function Topbar({
  title = "Default Title", // Customizable title
  showSearch = true, // Toggle search bar visibility
  showAddButton = true, // Toggle add button visibility
  addButtonLabel = "Add", // Custom label for add button
  onAddButtonClick, // Callback for add button click
  avatarLabel = "NS", // Customizable avatar initials
  children, // Additional elements (optional)
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        bgcolor: "white",
        boxShadow: 1,
      }}
    >

      <Typography variant="h6">{title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {showSearch && (
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{ mr: 2 }}
          />
        )}
        {showAddButton && (
          <Button
            variant="contained"
            sx={{ mr: 2, padding: "8px 16px", fontSize: "1rem" }}
            onClick={onAddButtonClick}
          >
            <span style={{ fontSize: "2rem" }}>+</span> {addButtonLabel}
          </Button>
        )}
        <Avatar>{avatarLabel}</Avatar>
        {children}
      </Box>
    </Box>
  );
}
