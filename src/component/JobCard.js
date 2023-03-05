import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function JobCard({ job }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 355,
        bgcolor: "#1A2027",
        m: "12px",
        flex: "1 1 auto",
        position: "relative",
      }}
    >
      <Box
        sx={{
          my: 3,
          mx: 2,
          width: "auto",
          color: "white",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ textAlign: "center", m: "0" }}
            >
              {job.title}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Box sx={{ p: "auto", m: "10px", color: "white" }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {job.skills.slice(0, 4).map((skill) => (
              <Chip
                key={skill}
                sx={{ color: "white", bgcolor: "red", m: "5px" }}
                label={skill}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{ mb: "100px" }}>
          <Typography color="white" variant="body3">
            {job.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          mb: 1,
          position: "absolute",
          bottom: "1px",
          left: "35%",
        }}
      >
        <Button
          sx={{
            color: "white",
            bgcolor: "#FF8C00",
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
