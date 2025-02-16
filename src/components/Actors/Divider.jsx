import React from "react";
import { Box } from "@mui/material";

function DividerLine() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "1px",
        background: "linear-gradient(to right, #141414, #515151, #141414)",
        margin: { xs: "20px 0", sm: "30px 0", md: "50px 0" }, // Адаптивные отступы
      }}
    />
  );
}

export default DividerLine;
