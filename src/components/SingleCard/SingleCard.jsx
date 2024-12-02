import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import styles from "./SingleCard.module.css";

export default function SingleCard({ id, name, time, image, makeClick }) {
  return (
    <Card sx={{ width: 395, height: 222, position: "relative" }}>
      <CardMedia sx={{ height: 1 }} component="img" alt={name} image={image} />
      <CardContent className={styles.cardContent}>
        <CardContent sx={{ padding: "10px", color: "#fff", textAlign: "left" }}>
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
  );
}
