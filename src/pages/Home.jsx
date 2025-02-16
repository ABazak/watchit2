import React, { useContext, useRef } from "react";
import SingleCard from "../components/SingleCard/SingleCard";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { DEFAULT_IMAGE } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { FilmsContext } from "../context/FilmContext";
import { useFavorites } from "../context/FavoriteIconContext";
import SliderHome from "../components/SliderHome/SliderHome";

function Home() {
  const { search, setSearch, data } = useContext(FilmsContext);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCardClick = (id) => {
    navigate(`/films/${id}`);
  };

  const handleHeartClick = (film) => {
    const isLoggedIn = localStorage.getItem("accessToken");
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }

    if (isFavorite(film.id)) {
      removeFavorite(film.id);
    } else {
      addFavorite(film); // Добавляем в избранное
    }
  };

  const searchRef = useRef(null);
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 1,
          marginTop: "50px",
        }}
      >
        <TextField
          inputRef={searchRef}
          id="outlined-controlled"
          label="Search"
          color="red"
          focused
          value={search}
          onChange={handleSearch}
          autoComplete="off"
          sx={{
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#e50914",
            },
            "& input": {
              color: "#fff",
            },
            "& fieldset": {
              borderColor: "#e50914",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#e50914",
              },
              "&:hover fieldset": {
                borderColor: "#e50914",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#e50914",
              },
              backgroundColor: "#191919",
              "&:hover": {
                backgroundColor: "#191919",
              },
              "&.Mui-focused": {
                backgroundColor: "#191919",
              },
            },
            marginBottom: "50px",
          }}
        />
      </Box>

      <SliderHome genre="Action" />
      <SliderHome genre="Crime" />

      <Box>
        <Grid container spacing={2}>
          {data.map(({ id, name, runtime, premiered, image }) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                margin: " 0 auto",
              }}
              key={id}
            >
              <SingleCard
                id={id}
                name={name}
                time={premiered}
                runtime={runtime}
                image={image?.original ?? DEFAULT_IMAGE}
                makeClick={handleCardClick}
                isFavorite={isFavorite(id)} // Состояние избранного
                onHeartClick={() =>
                  handleHeartClick({ id, name, runtime, premiered, image })
                } // Обработка клика на сердечко
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
