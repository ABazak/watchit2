import React, { useContext } from "react";

import SingleCard from "../components/SingleCard/SingleCard";
import Grid from "@mui/material/Grid2";
import { DEFAULT_IMAGE } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { FilmsContext } from "../context/FilmContext";
import "./ActorInfo.css";

function Films() {
  const { data } = useContext(FilmsContext);

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/films/${id}`);
  };

  if (!data || data.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {data.map(({ id, name, runtime, premiered, image }, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={index}>
            <SingleCard
              id={id}
              name={name}
              time={premiered}
              runtime={runtime}
              image={image?.original ?? DEFAULT_IMAGE}
              makeClick={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Films;
