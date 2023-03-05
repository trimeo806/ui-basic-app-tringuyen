import SearchAppBar from "./component/SearchAppBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import * as React from "react";

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

function App() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  // useEffect(() => {
  //   console.log(page);
  // }, [page]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Button color="neutral" variant="contained">
          neutral
        </Button> */}
        <SearchAppBar></SearchAppBar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage number={page} />}>
              <Route path=":jobId" element={<DetailPage />} />
            </Route>
          </Routes>
          <Pagination
            count={3}
            page={page}
            onChange={handleChange}
            variant="text"
            color="primary"
            sx={{ "Button.MuiPaginationItem-root": { color: "#fff" } }}
          />
          {/* Cach chinh mau cua pagination? syntax "tenElement.tenClass":{`CSS change`} */}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
