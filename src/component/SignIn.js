import { Box, IconButton } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 0, display: { xs: "flex", lg: "flex" } }}
      >
        <LoginIcon />
      </IconButton>
      <IconButton
        color="inherit"
        sx={{
          display: { xs: "flex", lg: "flex" },
        }}
        onClick={()=>{navigate("/login")}}
      >
        Sign in
      </IconButton>
    </Box>
  );
}

export default SignIn;
