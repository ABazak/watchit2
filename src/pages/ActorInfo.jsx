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

  useEffect(() => {
    const fetchActorData = async () => {
      try {
        const response = await axios.get(
          `https://watchit-api.onrender.com/shows/actor/${actorId}`
        );
        setActor(response.data);
      } catch (error) {
        console.error("Error fetching actor data:", error);
      }
    };

    fetchActorData();
  }, [actorId]);

  if (!actor) return <div className="loading">Loading...</div>;

  return (
    <Box
      sx={{
        padding: { xs: "15px 10px", md: "15px 50px" },
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <img
          src={actor.image?.medium ?? DEFAULT_IMAGE}
          alt={actor.name}
          className="cardActor"
        />
        <Box sx={{ marginLeft: { md: "20px" } }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "30px", md: "60px" },
              fontWeight: "600",
              textAlign: { xs: "center", md: "left" },
              marginTop: { xs: 1.5 },
            }}
          >
            {actor.name}
          </Typography>
          <Typography
            sx={{
              color: "#D1D0CF",

              maxWidth: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {actor.summary ?? "No biography available."}
          </Typography>
          <DividerLine />
        </Box>
      </Box>

      <Typography
        sx={{
          color: "#fff",
          fontSize: "25px",
          fontWeight: "600",
          marginTop: { xs: "0px", md: "30px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Acting in
      </Typography>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          maxWidth: "1920px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {actor.casts && actor.casts.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            navigation
            style={{ marginTop: "20px" }}
          >
            {actor.casts.map((movie) => (
              <SwiperSlide
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
                className="cardMoviesBlock"
              >
                <Box
                  sx={{ textAlign: "center", color: "#fff", cursor: "pointer" }}
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

      <Box
        sx={{
          color: "#D1D0CF",
          marginBottom: "90px",
          mt: 2,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "30px", md: "40px" },
          }}
        >
          Personal Info
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "left" },
            gap: 1,
          }}
        >
          <IconButton href="#" sx={{ color: "red" }}>
            <FacebookIcon sx={{ height: "50px" }} />
          </IconButton>
          <IconButton href="#" sx={{ color: "red" }}>
            <XIcon sx={{ height: "50px" }} />
          </IconButton>
          <IconButton href="#" sx={{ color: "red" }}>
            <LinkIcon sx={{ height: "50px" }} />
          </IconButton>
        </Box>
        <Box>
          <Typography sx={{ color: "#fff", fontSize: "20px" }}>
            Birthday
          </Typography>
          <Typography sx={{ fontSize: "17px" }}>
            {actor.birthday ?? "unknown"}
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "20px", mt: 2 }}>
            Country
          </Typography>
          <Typography sx={{ fontSize: "17px" }}>
            {actor.country?.name ?? "unknown"}
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "20px", mt: 2 }}>
            Gender
          </Typography>
          <Typography sx={{ fontSize: "17px" }}>
            {actor.gender ?? "unknown"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ActorInfo;
