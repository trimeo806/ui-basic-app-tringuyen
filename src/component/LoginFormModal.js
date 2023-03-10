import React from "react";
import { Controller } from "react-hook-form";
import { Alert, FormControlLabel, Grid, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { StatesContext } from "../App";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function LoginFormModal() {
  const navigate = useNavigate();
  const methods = useContext(StatesContext)[3];
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const [showPassword] = useContext(StatesContext)[4];
  const handleClickShowPassword = useContext(StatesContext)[5];
  const onSubmit = useContext(StatesContext)[6];
  const setHaveJobId = useContext(StatesContext)[8][1];

  return (
    <ThemeProvider theme={darkTheme}>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => {
          navigate("/");
          setHaveJobId(null);
        }}
        sx={{
          m: { xs: "10px", sm: "auto" },
          pt: "200px",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundImage:
              "linear-gradient(rgb(50, 50, 50) 0%, rgb(63, 63, 63) 40%, rgb(28, 28, 28) 150%), linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%)",
            maxWidth: "500px",
            m: "auto",
            p: "10px",
          }}
        >
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              margin="auto"
            >
              ;
              <Grid
                item
                margin="10px"
                alignSelf={{ xs: "center", md: "" }}
                display="flex"
                xs={10}
              >
                {" "}
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth={true}
                      error={!!error}
                      label="Email Address"
                      helperText={error?.message}
                      sx={{ minWidth: "200px" }}
                    />
                  )}
                />
              </Grid>
              <Grid
                item
                margin="10px"
                alignSelf={{ xs: "center", md: "" }}
                display="flex"
                xs={10}
              >
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth={true}
                      error={!!error}
                      label="Your password"
                      helperText={error?.message}
                      sx={{ minWidth: "200px" }}
                      type={showPassword ? "text" : "password"}
                      endadornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
              </Grid>
              <Grid
                item
                margin="10px"
                alignSelf={{ xs: "center", md: "flex-start" }}
                display="flex"
                xs={10}
              >
                <FormControlLabel
                  label="Remember me"
                  sx={{ color: "white" }}
                  control={
                    <Controller
                      name="remember"
                      control={control}
                      render={({ field }) => (
                        <Checkbox {...field} defaultChecked />
                      )}
                    />
                  }
                />
              </Grid>
              <Grid
                item
                margin="10px"
                alignSelf={{ xs: "center", md: "flex-start" }}
                display="flex"
                xs={10}
              >
                <Button
                  title="Submit"
                  onClick={handleSubmit(onSubmit)}
                  sx={{
                    minWidth: "100%",
                    bgcolor: "red",
                    color: "white",
                  }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Modal>
    </ThemeProvider>
  );
}

export default LoginFormModal;
