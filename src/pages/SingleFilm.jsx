import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import Header from "../components/SingleItemHeader/SingleItemHeader";
import Tabs from "../components/TabsComponent/TabsComponent";
import DividerLine from "../components/Actors/Divider";
import CardActor from "../components/Actors/CardActors";
import "./ActorInfo.css";

const SingleFilm = () => {
  const { filmId } = useParams();
  const [filmData, setFilmData] = useState(null);
  const [actors, setActors] = useState([]); 

  // Запрос на данные фильма
  useEffect(() => {
    const fetchFilmData = async () => {
      const response = await axios.get(
        `https://watchit-api.onrender.com/shows/${filmId}`
      );
      setFilmData(response.data);
    };

    const fetchActors = async () => {
      const response = await axios.get(
        `https://watchit-api.onrender.com/shows/${filmId}/cast`
      );
         const uniqueActors = response.data.filter(
        (actor, index, self) =>
          index === self.findIndex((a) => a.person.id === actor.person.id)
      );
      setActors(uniqueActors);
    };

    fetchFilmData();
    fetchActors();
  }, [filmId]);

  if (!filmData) return <div className="loading">Loading...</div>;

  return (
    <Grid container sx={{ marginLeft: "50px", width: "1" }}>
      <Header
        id={filmData.id}
        name={filmData.name}
        time={filmData.premiered}
        image={filmData.image?.medium}
        genres={filmData.genres}
        rating={filmData.rating?.average}
      />
      <Tabs />
      <DividerLine />
      <CardActor actors={actors} />
    </Grid>
  );
};

export default SingleFilm;
