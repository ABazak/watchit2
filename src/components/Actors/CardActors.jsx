import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

function CardActor() {
  const navigate = useNavigate();

  const handleCardClick = (actorId) => {
    navigate(`/actor/${actorId}`);
  };

  const actors = [
    {
      id: "charlie-hunnam",
      name: "Charlie Hunnam",
      description:
        "Famous for his roles in 'Sons of Anarchy' and 'King Arthur.",
      image:
        "https://jamadvice.com.ua/wp-content/uploads/2018/07/jamadvice_com_ua_the-most-beautiful-actors-of-hollywood-charlie-hunnam-1.jpg",
    },
    {
      id: "henry-cavill",
      name: "Henry Cavill",
      description:
        "Known for his performances in 'Superman' and 'The Witcher.'",
      image:
        "https://jamadvice.com.ua/wp-content/uploads/2018/07/jamadvice_com_ua_the-most-beautiful-actors-of-hollywood-henry-cavill-1.jpg",
    },
  ];

  return (
    <>
      <Box
        sx={{
          color: "#fff",
          fontSize: "25px",
          fontWeight: "600",
          width: 1,
        }}
      >
        Starring
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          flexWrap: "wrap",
          marginTop: 2,
          marginBottom: 15,
        }}
      >
        {actors.map((actor) => (
          <Card
            key={actors.id}
            sx={{ maxWidth: 450, backgroundColor: "#222222", color: "#fff" }}
          >
            <CardActionArea
              onClick={() => handleCardClick(actor.id)}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 210, height: 150 }}
                image={actor.image}
                alt={actor.name}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1,
                  padding: 2,
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {actor.name}
                </Typography>
                <Typography variant="body2">{actor.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default CardActor;
