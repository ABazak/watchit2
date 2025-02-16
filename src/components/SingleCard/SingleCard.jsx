import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../../context/FavoriteIconContext";
import styles from "./SingleCard.module.css";

export default function SingleCard({ id, name, time, image, makeClick }) {
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
    <Box
      sx={{
        maxWidth: "100vw",
        overflowX: "hidden",
        justifyItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "95%" },
          width: "395px",
          height: "222px",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          image={image}
          sx={{
            width: "100%",
            height: "1",
            objectFit: "cover",
          }}
        />

        <CardContent className={styles.cardContent}>
          {/* Блок для сердечка */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-10px",
              marginRight: "30px",
            }}
          >
            <Box
              className={styles.favIcon}
              sx={{
                backgroundColor: isSaved ? "red" : "white",
              }}
              onClick={handleFavoriteClick}
              title={isSaved ? "Unfollow" : "Follow"}
            >
              <FavoriteIcon
                sx={{
                  color: isSaved ? "white" : "grey",
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
          </Box>
          <CardContent
            sx={{ padding: "10px", color: "#fff", textAlign: "left" }}
          >
            <h3>{name}</h3>
            <p>{time}</p>
            <Button
              className={styles.buttonStyle}
              variant="contained"
              onClick={() => makeClick(id)}
            >
              Show more
            </Button>
          </CardContent>
        </CardContent>
      </Card>
    </Box>
  );
}
