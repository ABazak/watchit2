import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import DividerLine from "../components/Actors/Divider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { DEFAULT_IMAGE } from "../constants/constants";
import "./ActorInfo.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkIcon from "@mui/icons-material/Link";

function ActorInfo() {
  const { actorId } = useParams(); 
  const [actor, setActor] = useState(null); 
  const navigate = useNavigate();


  const handleMovieClick = (id) => {
    navigate(`/films/${id}`);
  };

  // Получение данных актера
  useEffect(() => {
    const fetchActorData = async () => {
      try {
        const response = await axios.get(
          `https://watchit-api.onrender.com/shows/actor/${actorId}`
        );
        setActor(response.data); // Сохраняем данные актера
     
      } catch (error) {
        console.error("Error fetching actor data:", error);
      }
    };

    fetchActorData();
  }, [actorId]);

  if (!actor) return <div className="loading">Loading...</div>; 

  return (
    <>
      <Box sx={{ margin: "15px 50px" }}>
        {/* Основная информация об актере */}
        <Box sx={{ display: "flex" }}>
          <img
            src={actor.image?.medium ?? DEFAULT_IMAGE}
            alt={actor.name}
            className="cardActor"
          />
          <Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "60px",
                  fontWeight: "600",
                }}
              >
                {actor.name}
              </Typography>
              <Typography
                sx={{
                  color: "#D1D0CF",
                  width: 1,
                }}
              >
                {actor.summary ?? "No biography available."}
              </Typography>
              <DividerLine />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              Acting in
            </Typography>

            {/* Слайдер с фильмами */}
            <Box
              sx={{
                maxWidth: "1300px",
                width: "100%",
                            }}
            >
              {actor.casts && actor.casts.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={40}
                  slidesPerView={4} 
                  navigation
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center", 
                  }}
                >
                  {actor.casts
                    .filter(
                      (movie, index, self) =>
                        index === self.findIndex((m) => m.id === movie.id) // Убираем дубликаты
                    )
                    .map((movie) => (
                      <SwiperSlide
                        key={movie.id}
                        onClick={() => handleMovieClick(movie.id)}
                        className="cardMoviesBlock"
                      >
                        <Box
                          sx={{
                            textAlign: "center",
                            color: "#fff",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={movie.image?.medium ?? DEFAULT_IMAGE}
                            alt={movie.name}
                            className="moviesCard"
                          />

                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontSize: "18px",
                              fontWeight: "500",
                            }}
                          >
                            {movie.name}
                          </Typography>
                        </Box>
                      </SwiperSlide>
                    ))}
                </Swiper>
              ) : (
                <Typography
                  sx={{
                    color: "#D1D0CF",
                    fontSize: "18px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  No movies found for this actor.
                </Typography>
              )}
            </Box>
          </Box>
        </Box>

        {/* Информация об актере */}
        <Box sx={{ color: "#D1D0CF", marginBottom: "90px" }}>
          <Typography sx={{ color: "#fff", fontSize: "40px" }}>
            Personal Info
          </Typography>
          {/* Иконки */}
          <Box sx={{ marginTop: "20px" }}>
            <IconButton href="#" sx={{ color: "red" }}>
              <FacebookIcon sx={{ height: "50px" }} />
            </IconButton>
            <IconButton href="#" sx={{ color: "red" }}>
              <XIcon sx={{ height: "50px" }} />
            </IconButton>
            <IconButton href="#" sx={{ color: "red" }}>
              <LinkIcon sx={{ height: "50px", marginRight: "" }} />
            </IconButton>
          </Box>

          <Box sx={{ margin: "15px 0px" }}>
            <Typography sx={{ color: "#fff", fontSize: "20px" }}>
              Birthday
            </Typography>
            <Typography sx={{ fontSize: "17px" }}>
              {actor.birthday ?? "unknown"}
            </Typography>
          </Box>
          <Box sx={{ margin: "15px 0px" }}>
            <Typography sx={{ color: "#fff", fontSize: "20px" }}>
              Country
            </Typography>
            <Typography sx={{ fontSize: "17px" }}>
              {actor.country?.name ?? "unknown"}
            </Typography>
          </Box>
          <Box sx={{ margin: "15px 0px" }}>
            <Typography sx={{ color: "#fff", fontSize: "20px" }}>
              Gender
            </Typography>
            <Typography sx={{ fontSize: "17px" }}>
              {actor.gender ?? "unknown"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ActorInfo;
