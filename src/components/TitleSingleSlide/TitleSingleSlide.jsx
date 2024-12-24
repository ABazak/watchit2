import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TitleSingleSlide.css";

const TitleSingleSlide = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // Запрос популярных фильмов
        const response = await axios.get(
          "https://watchit-api.onrender.com/shows?amount=10"
        );
        const films = response.data;

        // Запрос актеров для каждого фильма
        const filmsWithCast = await Promise.all(
          films.map(async (film) => {
            try {
              const castResponse = await axios.get(
                `https://watchit-api.onrender.com/shows/${film.id}/cast`
              );
              const cast = castResponse.data;

              return {
                ...film,
                cast, // Добавляем информацию об актерах
              };
            } catch (castError) {
              console.error(
                `Error fetching cast for film ${film.id}:`,
                castError
              );
              return { ...film, cast: [] };
            }
          })
        );

        setFilms(filmsWithCast);
      } catch (error) {
        console.error("Error fetching films:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (loading) {
    return <Box className="loading">Loading popular shows...</Box>;
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "93vh",
        overflow: "hidden",
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        style={{ height: "100%" }}
        slidesPerView={1}
        allowTouchMove={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {films.map((film) => (
          <SwiperSlide key={film.id}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), url(${
                  film.image?.original || film.image?.medium
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0 50px",
                backgroundBlendMode: "darken",
              }}
            >
              <Box sx={{ maxWidth: "40%", color: "#fff" }}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{ marginBottom: "30px" }}
                >
                  {film.name || "Untitled"}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{ marginBottom: "20px", fontWeight: 300 }}
                  dangerouslySetInnerHTML={{
                    __html: film.summary || "No description available.",
                  }}
                ></Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  gutterBottom
                  sx={{ marginBottom: "20px" }}
                >
                  <span style={{ color: "red" }}>Genres:</span>{" "}
                  {film.genres?.join(", ") || "No genres"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  gutterBottom
                  sx={{ marginBottom: "20px" }}
                >
                  <span style={{ color: "red" }}>Starring:</span>{" "}
                  {film.cast
                    ?.slice(0, 3)
                    .map((actor) => actor.person.name)
                    .join(", ") || "No starring"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  gutterBottom
                  sx={{ marginBottom: "20px" }}
                >
                  <span style={{ color: "red" }}>Tag:</span>{" "}
                  {film.cast?.[0]?.character.name || "No tag"}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => navigate(`/films/${film.id}`)}
                  sx={{ borderRadius: 0 }}
                >
                  Show more
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TitleSingleSlide;
