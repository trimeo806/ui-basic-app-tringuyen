import SearchAppBar from "./component/SearchAppBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import * as React from "react";
import LoginFormModal from "./component/LoginFormModal";
import { createContext, useState } from "react";
//Trong bai nay con CSS baseline chua tim hieu
//Can tim hieu them: Chip, Divider, CSS baseline, modify them (moi lam duoc co 1 cai)

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#e53e3e",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    formTextField: {
      main: "#fff",
      contrastText: "#053e85",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        color: "#fff",
        root: {
          // Some CSS
          fontSize: "1rem",
          color: "white",
        },
      },
    },
  },
});

export const StatesContext = createContext();

function App() {
  const [page, setPage] = useState(1);
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };
  // useEffect(() => {
  //   console.log(page);
  // }, [page]);

  return (
    <div className="App">
      <StatesContext.Provider value={[isLogin, setIsLogin]}>
        {" "}
        <ThemeProvider theme={theme}>
          <SearchAppBar></SearchAppBar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item lg={12}>
                <Routes>
                  <Route path="/" element={<HomePage number={page} />}>
                    <Route path="login" element={<LoginFormModal />}></Route>
                  </Route>
                </Routes>
              </Grid>
              <Grid item xs={12}>
                <Pagination
                  count={3}
                  page={page}
                  onChange={handleChange}
                  variant="text"
                  color="primary"
                  sx={{ "Button.MuiPaginationItem-root": { color: "#fff" } }}
                />
              </Grid>
            </Grid>
            {/* Cach chinh mau cua pagination? syntax "tenElement.tenClass":{`CSS change`} */}
          </Box>
        </ThemeProvider>
      </StatesContext.Provider>
    </div>
  );
}

export default App;
