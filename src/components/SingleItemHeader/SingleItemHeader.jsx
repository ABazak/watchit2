import React from "react";
import { DEFAULT_IMAGE } from "../../constants/constants";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import Stars from "../SingleItemHeader/Stars";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const SingleItemHeader = ({ name, image = DEFAULT_IMAGE, genres = [] }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            textTransform={"uppercase"}
            fontSize={"2.5rem"}
            sx={{ color: "#fff", fontWeight: "600" }}
          >
            {name}
          </Typography>
          <Stars />
        </Box>
        <Box>
          <Typography color="#e50914" sx={{ textTransform: "capitalize" }}>
            {genres[0]}
          </Typography>
        </Box>

        {/* Время фильма */}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              backgroundColor: "gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GoogleIcon sx={{ color: "#fff", width: 12, height: 12 }} />
          </Box>
          <Typography component="span" sx={{ color: "#fff", fontSize: "14px" }}>
            1hr : 36mins
          </Typography>
          <Box
            sx={{
              width: 5,
              height: 5,
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></Box>
          <Typography component="span" sx={{ color: "#fff", fontSize: "14px" }}>
            Nov 2024
          </Typography>
          <Box
            sx={{
              width: 5,
              height: 5,
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></Box>
          <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
            <VisibilityIcon sx={{ fontSize: "16px" }} />
            <Typography
              component="span"
              sx={{ color: "#fff", fontSize: "14px" }}
            >
              1323
            </Typography>
          </Box>
        </Box>

        {/* Icons*/}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          {/* Icon Share*/}
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <ShareIcon
                sx={{
                  color: "#e50914",
                  width: 16,
                  height: 16,
                }}
              />
            </Box>
          </Box>

          {/* Icon FavoriteIcon*/}
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <FavoriteIcon
                sx={{
                  color: "#e50914",
                  width: 16,
                  height: 16,
                }}
              />
            </Box>
          </Box>

          {/* Icon AddIcon*/}
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <AddIcon
                sx={{
                  color: "#e50914",
                  width: 16,
                  height: 16,
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Tags */}
        <Typography
          color="#e50914"
          sx={{ textTransform: "capitalize", marginTop: "15px" }}
        >
          TAGS :
          <Box component="span" sx={{ color: "#fff" }}>
            {" "}
            {genres.join(", ")}
          </Box>
        </Typography>
      </Grid>

      {/*  картинка  */}
      <Card
        sx={{
          width: 395,
          height: 222,
          position: "relative",
          marginRight: "10rem",
          borderRadius: "15px",
        }}
      >
        <CardMedia sx={{ height: 1 }} component="img" image={image} />
        <CardContent
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",

            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
          }}
        ></CardContent>
      </Card>
    </Grid>
  );
};

export default SingleItemHeader;
