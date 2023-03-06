import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function JobCard({ job }) {
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
                fontSize: "0.2rem",
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
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
