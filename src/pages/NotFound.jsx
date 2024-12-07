import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Box
        sx={{ height: "100vh" }}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>This page not found</Typography>
        <Link to="/home">Back to home</Link>
      </Box>
    </div>
  );
};

export default NotFound;
