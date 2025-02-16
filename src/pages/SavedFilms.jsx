import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SingleCard from "../components/SingleCard/SingleCard";
import { useFavorites } from "../context/FavoriteIconContext";
import { useNavigate } from "react-router-dom";

const SavedFilms = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/films/${id}`);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "100vw",
        overflowX: "hidden", 
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", color: "white", fontWeight: 600 }}
      >
        Favorites:
      </Typography>
      {favorites.length > 0 ? (
        <Grid container spacing={2}>
          {favorites.map(({ id, name, image, time }) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={id}>
              <SingleCard
                id={id}
                name={name}
                image={image}
                time={time}
                makeClick={handleCardClick}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ color: "white" }}>
          You haven't added any movies to your favorites yet.
        </Typography>
      )}
    </Box>
  );
};

export default SavedFilms;
