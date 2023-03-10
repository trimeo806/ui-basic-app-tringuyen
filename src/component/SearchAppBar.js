import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StatesContext } from "../App";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const setHaveJobId = useContext(StatesContext)[8][1];
  const [isLogin, setIsLogin] = useContext(StatesContext)[1];
  const user = useContext(StatesContext)[7].email;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#FFFFFF14" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "center", lg: "space-around" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", lg: "flex" },
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              Job Rounting
            </Typography>
            <Search sx={{ display: "flex" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ width: { xs: "300px", lg: "400px" } }}
              />
            </Search>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {isLogin ? (
              <>
                <IconButton
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    alignSelf: "center",
                  }}
                >
                  <AccountCircleIcon />
                </IconButton>
                <Typography
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    alignSelf: "center",
                  }}
                >
                  {user}
                </Typography>

                <IconButton
                  sx={{
                    color: "#fff",
                    display: { xs: "none", lg: "flex" },
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
                  sx={{ mr: 0, display: { xs: "none", lg: "flex" } }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <LoginIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#fff",
                    display: { xs: "none", lg: "flex" },
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

          <Box
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              display: { xs: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 0, display: { xs: "flex", lg: "none" } }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                { backgroundColor: "#FFFFFF14" },
            }}
          >
            <MenuItem onClick={handleClose}>
              <SignIn></SignIn>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
