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
    <Box
      sx={{
        padding: { xs: "15px 10px", md: "0px 50px" },
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
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
      <Box
        sx={{
          maxWidth: "1700px",
          width: "100%",
          marginBottom: { md: "40px" },
          overflow: "hidden",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            650: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1920: { slidesPerView: 4, spaceBetween: 20 },
          }}
          navigation
          style={{ marginTop: "10px" }}
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
