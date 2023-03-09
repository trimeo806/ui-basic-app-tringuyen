import { Box, IconButton } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StatesContext } from "../App";

function SignIn() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useContext(StatesContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLogin ? (
        <IconButton
          color="inherit"
          sx={{
            display: { xs: "flex", lg: "flex" },
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign out
        </IconButton>
      ) : (
        <>
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
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </IconButton>
        </>
      )}
    </Box>
  );
}

export default SignIn;
