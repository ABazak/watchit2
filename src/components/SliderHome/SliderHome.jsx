import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";
import { DEFAULT_IMAGE } from "../../constants/constants";
import "./SliderHome.css";

function SliderHome({ genre }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/films/${id}`);
  };

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const response = await axios.get(
          `https://watchit-api.onrender.com/shows?genre=${encodeURIComponent(
            genre
          )}`
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMoviesByGenre();
  }, [genre]);

  return (
    <Box sx={{ margin: "20px 15px" }}>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "25px",
          fontWeight: "600",
          margin: "5px 5px 5px 15px",
        }}
      >
        {genre} Shows
      </Typography>
      <Box sx={{ maxWidth: "1600px", width: "100%", marginBottom: "70px" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={100}
          slidesPerView={4}
          navigation
          style={{ marginTop: "20px" }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <SingleCard
                id={movie.id}
                name={movie.name}
                time={movie.premiered}
                image={movie.image?.medium ?? DEFAULT_IMAGE}
                makeClick={handleMovieClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default SliderHome;
