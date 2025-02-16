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
import styles from "./SingleItemHeader.module.css";
import { useFavorites } from "../../context/FavoriteIconContext";

const SingleItemHeader = ({
  id,
  name,
  time,
  image = DEFAULT_IMAGE,
  genres = [],
}) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isSaved = isFavorite(id);

  const handleFavoriteClick = () => {
    if (isSaved) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, image, time });
    }
  };

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
            sx={{
              color: "#fff",
              fontWeight: "600",
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
              textAlign: "left", 
              lineHeight: 1.2, 
            }}
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
          <Box className={styles.iconG}>
            <GoogleIcon sx={{ color: "#fff", width: 12, height: 12 }} />
          </Box>
          <Typography component="span" sx={{ color: "#fff", fontSize: "14px" }}>
            1hr : 36mins
          </Typography>
          <Box className={styles.separatorDot}></Box>
          <Typography component="span" sx={{ color: "#fff", fontSize: "14px" }}>
            Nov 2024
          </Typography>
          <Box className={styles.separatorDot}></Box>
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

        {/* Icons */}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          {/* Icon Share */}
          <Box className={styles.iconGreyColor}>
            <Box className={styles.iconWhiteColor}>
              <ShareIcon
                sx={{
                  color: "#e50914",
                  width: 16,
                  height: 16,
                }}
              />
            </Box>
          </Box>

          {/* Icon FavoriteIcon */}
          <Box
            className={styles.favIconGreyRed}
            sx={{ backgroundColor: isSaved ? "red" : "grey" }}
            onClick={handleFavoriteClick}
            title={isSaved ? "Unfollow" : "Follow"}
          >
            <Box
              className={styles.favIconWhiteRed}
              sx={{
                backgroundColor: isSaved ? "red" : "white",
              }}
            >
              <FavoriteIcon
                sx={{
                  color: isSaved ? "white" : "red",
                  width: isSaved ? 27 : 22,
                  height: isSaved ? 27 : 22,
                }}
              />
            </Box>
          </Box>

          {/* Icon AddIcon */}
          <Box className={styles.iconGreyColor}>
            <Box className={styles.iconWhiteColor}>
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
        <CardContent className={styles.image}></CardContent>
      </Card>
    </Grid>
  );
};

export default SingleItemHeader;
