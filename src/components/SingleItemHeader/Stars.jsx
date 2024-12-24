import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Stars = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <StarIcon
          sx={{
            color: "#e50914",
            width: 25,
            height: 25,
          }}
        />
        <StarIcon
          sx={{
            color: "#e50914",
            width: 25,
            height: 25,
          }}
        />
        <StarIcon
          sx={{
            color: "#e50914",
            width: 25,
            height: 25,
          }}
        />
        <StarIcon
          sx={{
            color: "#e50914",
            width: 25,
            height: 25,
          }}
        />
        <StarHalfIcon
          sx={{
            color: "#e50914",
            width: 25,
            height: 25,
          }}
        />

        {/* Рейтинг */}
        <Typography color="#fff" fontWeight={600} marginLeft={1}>
          3.5
        </Typography>
      </Box>
    </>
  );
};

export default Stars;
