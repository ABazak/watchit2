import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Используем Grid2
import StarIcon from "@mui/icons-material/Star";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const episodes = [
    {
      title: "Pilot (Season 1, Episode 1)",
      airdate: "2024-06-24",
      rating: 3.5,
    },
    {
      title: "The Fire (Season 1, Episode 2)",
      airdate: "2024-07-24",
      rating: 3.5,
    },
    {
      title: "Manhunt (Season 1, Episode 3)",
      airdate: "2024-08-24",
      rating: 3.5,
    },
  ];

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          width: 1,
          margin: "50px 0",
          background: "linear-gradient(to right, #141414, #080808, #141414)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "500px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="centered tabs example"
              variant="fullWidth"
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#e50914",
                  height: "1px",
                },
                "& .Mui-selected": {
                  backgroundColor: "#191919",
                  fontWeight: "bold",
                },
                "& .MuiTab-root": {
                  color: "#fff",
                  textTransform: "none",
                },
                "& button.Mui-selected": { color: "#e50914" },
                height: "70px",
                "& .MuiTabs-flexContainer": {
                  height: "100%",
                },
              }}
            >
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Series" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography sx={{ color: "#fff" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Box sx={{ width: "100%", color: "#fff" }}>
          {/* Заголовки */}
          <Grid
            container
            spacing={2}
            sx={{
              backgroundColor: "#282B2F",
              padding: "35px 20px",
              margin: "20px 0px",
              position: "relative", // Включаем позиционирование для каждой строки
              alignItems: "center",
              flexWrap: "wrap", // Позволяем элементам переноситься
            }}
          >
            <Grid
              xs={4}
              sx={{
                position: "absolute",
                // left: 0,
                textAlign: "left",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Episode</Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                position: "absolute",
                left: "50%",
                // transform: "translateX(-50%)", // Центрируем колонку
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Airdate</Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                position: "absolute",
                right: 0,
                textAlign: "right",
                paddingRight: "220px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Rating</Typography>
            </Grid>
          </Grid>

          {/* Список серий */}
          {episodes.map((episode, index) => (
            <Grid
              container
              spacing={2}
              key={index}
              sx={{
                backgroundColor: "#191919",
                padding: "35px 20px",
                margin: "20px 0px",
                display: "flex",
                flexWrap: "wrap",
                position: "relative", // Позиционирование для строки
                alignItems: "center",
              }}
            >
              {/* Левая колонка */}
              <Grid
                xs={4}
                sx={{
                  position: "absolute",
                  // left: 0,
                  textAlign: "left",
                }}
              >
                <Typography>{episode.title}</Typography>
              </Grid>

              {/* Центральная колонка */}
              <Grid
                xs={4}
                sx={{
                  position: "absolute",
                  left: "50%",
                  // transform: "translateX(-50%)", // Центрируем колонку
                  textAlign: "center",
                }}
              >
                <Typography>{episode.airdate}</Typography>
              </Grid>

              {/* Правая колонка */}
              <Grid
                xs={4}
                sx={{
                  position: "absolute",
                  right: 0,
                  paddingRight: "150px",
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    sx={{
                      color:
                        starIndex < Math.round(episode.rating)
                          ? "#e50914"
                          : "gray",
                      fontSize: "18px",
                    }}
                  />
                ))}
                <Typography sx={{ marginLeft: 1 }}>{episode.rating}</Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </CustomTabPanel>
    </Box>
  );
}

export default TabsComponent;
