import { Box, IconButton } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StatesContext } from "../App";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";

function SignIn() {
  const navigate = useNavigate();
  const setHaveJobId = useContext(StatesContext)[8][1];
  const [isLogin, setIsLogin] = useContext(StatesContext)[1];
  const user = useContext(StatesContext)[7].email;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLogin ? (
        <>
          {" "}
          <Typography
            sx={{
              display: { xs: "flex", lg: "flex" },
            }}
          >
            <AccountCircleIcon /> {user}
          </Typography>
          <IconButton
            color="inherit"
            sx={{
              display: { xs: "flex", lg: "flex" },
              fontSize: "1em",
            }}
            onClick={() => {
              navigate("/");
              setIsLogin(false);
              setHaveJobId(null);
            }}
          >
            Sign out
          </IconButton>
        </>
      ) : (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0, display: { xs: "flex", lg: "flex" }, fontSize: "1em" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            <LoginIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              display: { xs: "flex", lg: "flex" },
              fontSize: "1em",
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
