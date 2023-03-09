import React from "react";
import JobCard from "../component/JobCard";
import Grid from "@mui/material/Grid";
import { jobs } from "../data";
import { Outlet } from "react-router-dom";

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
    <>
          <Outlet></Outlet>

      <Grid
        container
        spacing={0}
        maxWidth={1200}
        direction={{ xs: "column", lg: "row" }}
        justifyContent={{ xs: "center", lg: "flex-start" }}
      >
        {jobs.slice(item1, item2).map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </Grid>
    </>
  );
}

export default HomePage;
