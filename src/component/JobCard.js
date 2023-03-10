import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { StatesContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const [isLogin] = useContext(StatesContext)[1];
  const navigate = useNavigate();
  const [haveJobId, setHaveJobId] = useContext(StatesContext)[8];
  const handleClick = (jobId) => {
    setHaveJobId(jobId);
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate(`/${jobId}`);
    }
  };

  useEffect(() => {
    console.log(haveJobId);
  }, [haveJobId]);

  return (
    <Box
      sx={{
        width: "355",
        maxWidth: 355,
        bgcolor: "#FFFFFF14",
        m: "12px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          my: 1,
          mx: 2,
          maxWidth: "300px",
          height: "16rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
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
      </Box>
      <Box>
        <Button
          sx={{
            color: "white",
            bgcolor: "#FF8C00",
            mb: "0.75rem",
          }}
          onClick={() => handleClick(job.id)}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
