import React from "react";
import JobCard from "../component/JobCard";
import { Box } from "@mui/system";
import { jobs } from "../data";

function HomePage({ number }) {
  let item1 = 0;
  let item2 = 5;
  switch (number) {
    case 1:
      item1 = 0;
      item2 = 5;
      break;
    case 2:
      item1 = 5;
      item2 = 10;
      break;
    case 3:
      item1 = 10;
      item2 = 14;
      break;

    default:
      break;
  }

  return (
    <Box
      sx={{
        width: { xs: "100vw", lg: "100vw", xl: "69vw" },
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", lg: "center", xl: "flex-start" },
      }}
    >
      {jobs.slice(item1, item2).map((job) => (
        <JobCard key={job.id} job={job}></JobCard>
      ))}
    </Box>
  );
}

export default HomePage;
