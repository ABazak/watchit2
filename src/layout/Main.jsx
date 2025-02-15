import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import { FilmsProvider } from "../context/FilmContext";
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";
import { useLocation } from "react-router-dom";
import { FavoritesProvider } from "../context/FavoriteIconContext";

const Main = () => {
  const location = useLocation();

  return (
    <FavoritesProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#141414",
        }}
      >
        <Navigation />

        <FilmsProvider>
          {location.pathname === "/" && <TitleSingleSlide />}
          <Grid container>
            <Outlet />
          </Grid>
        </FilmsProvider>
        <Footer />
      </Box>
    </FavoritesProvider>
  );
};

export default Main;
