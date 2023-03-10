import SearchAppBar from "./component/SearchAppBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import * as React from "react";
import LoginFormModal from "./component/LoginFormModal";
import { createContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
//Trong bai nay con CSS baseline chua tim hieu
//Can tim hieu them: Chip, Divider, CSS baseline, modify them (moi lam duoc co 1 cai)

const theme = createTheme({
  palette: {
    primary: {
      main: "#e53e3e",
    },
    mode: "dark",
  },
});

export const StatesContext = createContext();

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.number().required(),
  })
  .required();

function App() {
  const [page, setPage] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const defaultValues = {
    email: "tringuyen@gmail.com",
    password: "123",
    remember: "true",
  };
  const methods = useForm({ resolver: yupResolver(schema), defaultValues });
  const {
    setError,
    formState: { errors },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = (e) => {
    !showPassword ? setShowPassword(true) : setShowPassword(false);
  };
  const [haveJobId, setHaveJobId] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    if (email && parseInt(password) && haveJobId) {
      setIsLogin(true);
      navigate(`/${haveJobId}`);
      setUser({ email });
    } else if (email && parseInt(password) && !haveJobId) {
      setIsLogin(true);
      navigate("/");
      setUser({ email });
    } else {
      setIsLogin(false);
      setError("afterSubmit", { message: "Incorrect email or password" });
      console.log(errors);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="App">
      <StatesContext.Provider
        value={[
          schema,
          [isLogin, setIsLogin],
          defaultValues,
          methods,
          [showPassword, setShowPassword],
          handleClickShowPassword,
          onSubmit,
          user,
          [haveJobId, setHaveJobId],
        ]}
      >
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
                    <Route path="/:jobId" element={<DetailPage />}></Route>
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
