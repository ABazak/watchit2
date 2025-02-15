import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";


const Footer = () => {
 
  
  return (
    <Box
      sx={{
        backgroundColor: "#232323",
        color: "#fff",
        padding: "1px",
        // margin: "100vh",
        mt: "auto",
        // чтобы футер оставался снизу
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          textAlign: "left",
          margin: "30px 0px 30px 70px",
          color: "#FFF4E6",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Левая часть с ссылками */}
        <Grid xs={4}>
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
          <Typography
            variant="body2"
            sx={{ marginTop: "40px", maxWidth: "800px" }}
          >
            © 2024 WATCHIT. All Rights Resserved. All videos and shows on this
            platform are trademarks of, and all related images and contens are
            the property, of Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </Typography>
        </Grid>

        {/* Центральная часть с иконками социальных сетей */}
        <Grid xs={4} textAlign="left">
          <Typography variant="body1">Follow Us :</Typography>
          <Box sx={{ marginTop: "20px" }}>
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
              <GoogleIcon sx={{ height: "20px", marginRight: "" }} />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff", background: "#313131" }}>
              <GitHubIcon sx={{ height: "20px" }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Правая часть с приложением */}
        <Grid xs={4} textAlign="left" sx={{ marginRight: "100px" }}>
          <Typography variant="body1">Watchit App</Typography>
          <Box sx={{ marginTop: "10px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ width: "150px", marginRight: "20px", cursor: "pointer" }}
            />
            <img
              src={iconApp}
              // src="https://www.churchoftherock.ca/wp-content/uploads/2024/02/download-on-the-app-store-apple-logo-png-transparent.png"
              alt="App Store"
              style={{ width: "150px", cursor: "pointer" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
