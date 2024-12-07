import { Box, Typography, IconButton } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import DividerLine from "../components/Actors/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkIcon from "@mui/icons-material/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useState, useEffect } from "react";
import { DEFAULT_IMAGE } from "../constants/constants";
import "./ActorInfoSlider.css";

function ActorInfo() {
  const { actorId } = useParams();
  const [actorMovies, setActorMovies] = useState([]);
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/films/${id}`);
  };

  const actorData = {
    "charlie-hunnam": {
      name: "Charlie Hunnam",
      birthday: "1980-04-10",
      country: "United Kingdom",
      gender: "Male",
      bio: "Famous for his roles in 'Sons of Anarchy' and 'King Arthur.' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://www.gannett-cdn.com/-mm-/dacde47fc03566a8802b4df3fdd371a8b0e7456a/c=0-594-3443-5184/local/-/media/2017/04/11/USATODAY/USATODAY/636275403692411298-XXX-CHARLIE-HUNNAM-20170407-USA-DJM-018-90159996.JPG?width=1588",
    },
    "henry-cavill": {
      name: "Henry Cavill",
      birthday: "1983-05-05",
      country: "United Kingdom",
      gender: "Male",
      bio: "Known for his performances in 'Superman' and 'The Witcher.' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Henry_Cavill_by_Gage_Skidmore_2.jpg/800px-Henry_Cavill_by_Gage_Skidmore_2.jpg",
    },
  };

  const actor = actorData[actorId];

  useEffect(() => {
    const actorMovies = async () => {
      if (!actor) return;

      try {
        const response = await axios.get(
          `https://watchit-api.onrender.com/shows?actor=${encodeURIComponent(
            actor.name
          )}`
        );
        setActorMovies(response.data);
      } catch (error) {
        console.error("Error fetching actor movies:", error);
      }
    };

    actorMovies();
  }, [actor]);

  return (
    <>
      <Box sx={{ margin: "15px 50px" }}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <img
            src={actor.image}
            alt={actor.name}
            style={{
              width: "400px",
              height: "500px",
              marginRight: "50px",
              border: "0.1px solid black",
            }}
          />
          <Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "60px",
                  fontWeight: "600",
                  //   width: 1,
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
                {actor.bio}
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

            {/* Swiper с фильмами */}
            <Box
              sx={{
                maxWidth: "1300px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={4} //
                navigation
                //  pagination={{ clickable: true }}
                style={{ marginTop: "20px" }}
              >
                {actorMovies.map((movie, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => handleMovieClick(movie.id)}
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
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
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
            </Box>
          </Box>
        </Box>

        {/* Инфо о б актере */}
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
          {/* Другая информация */}
          <Box sx={{ margin: "15px 0px" }}>
            <Typography sx={{ color: "#fff", fontSize: "20px" }}>
              Birthday
            </Typography>
            <Typography sx={{ fontSize: "17px" }}>{actor.birthday}</Typography>
          </Box>
          <Box sx={{ margin: "15px 0px" }}>
            <Typography sx={{ color: "#fff", fontSize: "20px" }}>
              Country
            </Typography>
            <Typography sx={{ fontSize: "17px" }}>{actor.country}</Typography>
          </Box>
          <Box sx={{ margin: "15px 0px" }}>
            <Typography sx={{ color: "#fff", fontSize: "20px" }}>
              Gender
            </Typography>
            <Typography sx={{ fontSize: "17px" }}>{actor.gender}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ActorInfo;
