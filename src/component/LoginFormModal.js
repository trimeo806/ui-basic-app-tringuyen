import React from "react";
import { useState } from "react";
import { Grid, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SignIn from "./SignIn";

function LoginFormModal() {
  const navigate = useNavigate();
  const defaultValues = {
    email: "tringuyen@gmail.com",
    password: "123",
    remember: "true",
  };
  const methods = useForm({ defaultValues });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    control,
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = (e) => {
    !showPassword ? setShowPassword(true) : setShowPassword(false);
  };
  const onSubmit = (data) => console.log(data);

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => {
        navigate("/");
      }}
      sx={{
        backgroundColor: "#FFFFFF14",
        color: "#fff",
        m: "auto",
        pt: "200px",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            sx={{ padding: "10px" }}
          >
            {" "}
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  color="formTextField"
                  fullWidth
                  error={!!error}
                  helperText={error?.message}
                  label="Email"
                  variant="outlined"
                  sx={{
                    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus":
                      { outlined: true },
                    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      color: "#fff",
                    },
                    ".css-r527s4-MuiFormLabel-root-MuiInputLabel-root": {
                      color: "#fff",
                    },
                    margin: "10px",
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  endadornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  color="formTextField"
                  fullWidth
                  label="Password"
                  variant="outlined"
                  sx={{
                    ".css-r527s4-MuiFormLabel-root-MuiInputLabel-root": {
                      color: "#fff",
                    },
                    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      color: "#fff",
                    },
                    margin: "10px",
                  }}
                />
              )}
            />
            <Grid item xs={12} margin="10px">
              <input
                onClick={() => console.log("clicked")}
                type="submit"
                value="Sign In"
                style={{
                  minWidth: "100%",
                  minHeight: "40px",
                  backgroundColor: "red",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "blue",
                  },
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Modal>
  );
}

export default LoginFormModal;
