import React from "react";
import { Grid, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginFormModal() {
  const navigate = useNavigate();

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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>

        <Typography id="modal-modal-description" variant="h6" component="h2">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Grid>
    </Modal>
  );
}

export default LoginFormModal;
