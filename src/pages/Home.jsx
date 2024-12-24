import React, { useContext, useRef } from "react";
import SingleCard from "../components/SingleCard/SingleCard";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { DEFAULT_IMAGE } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { FilmsContext } from "../context/FilmContext";
import SliderHome from "../components/SliderHome/SliderHome";

function App() {
  const { search, setSearch, data } = useContext(FilmsContext);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/films/${id}`);
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

      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {data.map(({ id, name, runtime, premiered, image }, index) => (
          <Grid size={3} key={index}>
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

export default App;
