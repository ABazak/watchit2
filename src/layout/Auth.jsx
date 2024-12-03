import Grid from "@mui/material/Grid2";
import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <Grid
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Grid>
    </div>
  );
};

export default Auth;
