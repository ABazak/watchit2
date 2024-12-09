import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";

const TitleSingleSlide = () => {
  const films = [
    {
      id: 1,
      name: "Under the Dome",
      starring: ["Mike Vogel", "Rachelle Lefevre", "Alexander Koch"],
      summary:
        "Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome.",
      genres: ["Drama", "Science-Fiction", "Thriller"],
      image: "https://images2.alphacoders.com/841/841727.jpg",
    },
    {
      id: 2,
      name: "Breaking Bad",
      starring: ["Bryan Cranston", "Aaron Pau", "lAnna Gunn"],
      summary:
        "A high school chemistry teacher turned methamphetamine producer navigates the dangers of the drug trade.",
      genres: ["Crime", "Drama", "Thriller"],
      image: "https://www.fonstola.ru/images/201502/fonstola.ru_162426.jpg",
    },
    {
      id: 3,
      name: "Game of Thrones",
      starring: ["Emilia Clarke", "RPeter Dinklage", "Kit Harington"],
      summary:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      genres: ["Fantasy", "Drama", "Adventure"],
      image:
        "https://wallpapers.com/images/featured-full/game-of-thrones-92acb30ilmkjbmu9.jpg",
    },
  ];

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
        preventClicks={false}
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
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), url(${film.image})`,
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
                  sx={{ marginBottom: "50px" }}
                >
                  {film.name || "Untitled"}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{ marginBottom: "30px", fontWeight: 300 }}
                >
                  {film.summary}
                </Typography>
                <Typography variant="subtitle1" component="p" gutterBottom>
                  <span style={{ color: "red", fontWeight: 300 }}>
                    Starring:
                  </span>{" "}
                  {film.starring?.join(", ") || "No starring"}
                </Typography>
                <Typography variant="subtitle1" component="p" gutterBottom>
                  <span style={{ color: "red" }}>Genres:</span>{" "}
                  {film.genres[0] || "No genres"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  gutterBottom
                  sx={{ marginBottom: "30px" }}
                >
                  <span style={{ color: "red" }}>Tag:</span>{" "}
                  {film.genres?.join(", ") || "No genres"}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  href="https://watchit-api.onrender.com/shows/popular"
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
