import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Tabs from "../components/TabsComponent/TabsComponent";
import DividerLine from "../components/Actors/Divider";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import Header from "../components/SingleItemHeader/SingleItemHeader";
import CardActor from "../components/Actors/CardActor";

const SingleFilm = () => {
  const { filmId } = useParams();
  const [filmData, setFilmData] = useState("");
  useEffect(() => {
    const FilmsData = async () => {
      const response = await axios.get(
        `https://watchit-api.onrender.com/shows/${filmId}`
      );
      setFilmData(response.data);
    };
    FilmsData();
  }, [filmId]);

  return (
    <>
      <Grid container sx={{ marginLeft: "50px", width: "1" }}>
        <Header
          name={filmData.name}
          image={filmData.image?.medium}
          genres={filmData.genres}
          rating={filmData.rating?.average}
        />
        <Tabs />
        <DividerLine />
        <CardActor />
      </Grid>
    </>
  );
};

export default SingleFilm;
