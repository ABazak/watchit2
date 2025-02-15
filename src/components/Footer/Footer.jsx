import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Импортируем Grid2
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const iconApp = "/images/iconstor.svg";
  const iconGoogle = "/images/icongoogle.png";

  return (
    <Box
      sx={{
        backgroundColor: "#232323",
        color: "#fff",
        padding: { xs: "20px", md: "30px 70px" },
        mt: "auto",
      }}
    >
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, // 1 колонка на мобилках, 3 на ПК
          gap: 2,
          textAlign: { xs: "center", md: "left" },
          color: "#FFF4E6",
        }}
      >
        {/* Левая часть с ссылками */}
        <Box>
          <Box>
            <Link
              href="#"
              color="inherit"
              sx={{ marginRight: "20px", textDecoration: "none" }}
            >
              Terms Of Use
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ marginRight: "20px", textDecoration: "none" }}
            >
              Privacy-Policy
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ marginRight: "20px", textDecoration: "none" }}
            >
              FAQ
            </Link>
            <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
              Watch List
            </Link>
          </Box>
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            © 2025 WATCHIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and contents are
            the property of Streamit Inc. Duplication and copy of this is
            strictly prohibited.
          </Typography>
        </Box>

        {/* Центральная часть с иконками соцсетей */}
        <Box>
          <Typography variant="body1">Follow Us :</Typography>
          <Box sx={{ marginTop: "10px" }}>
            <IconButton
              href="#"
              sx={{ color: "#fff", background: "#313131", marginRight: "10px" }}
            >
              <FacebookIcon sx={{ height: "20px" }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{ color: "#fff", background: "#313131", marginRight: "10px" }}
            >
              <XIcon sx={{ height: "20px" }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{ color: "#fff", background: "#313131", marginRight: "10px" }}
            >
              <GoogleIcon sx={{ height: "20px" }} />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff", background: "#313131" }}>
              <GitHubIcon sx={{ height: "20px" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Правая часть с приложением */}
        <Box>
          <Typography variant="body1">Watchit App</Typography>
          <Box sx={{ marginTop: "10px" }}>
            <img
              src={iconGoogle}
              alt="Google Play"
              style={{
                width: "150px",
                height: "50px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            <img
              src={iconApp}
              alt="App Store"
              style={{ width: "150px", height: "50px", cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
