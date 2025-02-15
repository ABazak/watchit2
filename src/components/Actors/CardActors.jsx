import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { DEFAULT_IMAGE } from "../../constants/constants";

function CardActor({ actors }) {
  const navigate = useNavigate();

  const handleCardClick = (actorId) => {
    navigate(`/actor/${actorId}`);
  };

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
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", 
            sm: "repeat(2, 1fr)", 
            md: "repeat(3, 1fr)", 
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
          marginTop: 2,
          marginBottom: 15,
        }}
      >
        {actors.map(({ person, character }) => (
          <Card
            key={person.id}
            sx={{
              backgroundColor: "#222222",
              color: "#fff",
              width: "100%",
              maxWidth: 400,
              alignSelf: "center",
            }}
          >
            <CardActionArea
              onClick={() => handleCardClick(person.id)}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 150,
                  height: 150,
                }}
                image={
                  person.image?.medium ||
                  character.image?.medium ||
                  DEFAULT_IMAGE
                }
                alt={person.name}
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
                  {person.name}
                </Typography>
                <Typography variant="body2">
                  {character.name} ({person.gender})
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default CardActor;
