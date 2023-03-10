import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Divider, Stack, Chip, Modal, Grid } from "@mui/material";
import { jobs } from "../data";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StatesContext } from "../App";

function Job({ job }) {
  const navigate = useNavigate();
  const setHaveJobId = useContext(StatesContext)[8][1];

  return (
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
          borderRadius: "10px",
          backgroundImage:
            "linear-gradient(rgb(50, 50, 50) 100%, rgb(63, 63, 63) 100%, rgb(28, 28, 28) 200%),linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%)",
          maxWidth: "500px",
          m: "auto",
          p: "10px",
        }}
      >
        {" "}
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: "white" }}
        >
          {job.title}
        </Typography>
        <Divider variant="middle" />
        <Stack
          direction="row"
          spacing={0}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              key={skill}
              sx={{
                color: "white",
                bgcolor: "red",
                m: "5px",
                fontSize: "0.7rem",
              }}
              label={skill}
            />
          ))}
        </Stack>{" "}
        <Typography color="white" variant="body3">
          {job.description}
        </Typography>
      </Grid>
    </Modal>
  );
}

const getJob = (jobId) => jobs.find((job) => job.id === jobId);

function DetailPage() {
  const params = useParams();
  console.log(getJob(params.jobId));
  return <Job job={getJob(params.jobId)} />;
}

export default DetailPage;
