import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
            }}
          >
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
              <Tab
                label="Series"
                {...a11yProps(1)}
                //
              />
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
          {/* Заголовок  */}
          <Grid
            container
            spacing={3}
            sx={{
              padding: "20px 20px",
              justifyContent: "space-between",
              backgroundColor: "#282B2F",
              borderBottom: "2px solid #474D54",
            }}
          >
            <Grid>
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Episode
              </Typography>
            </Grid>
            <Grid sx={{ textAlign: "center" }}>
              <Typography
                component="span"
                sx={{ fontWeight: "bold", marginLeft: "9rem" }}
              >
                Airdate
              </Typography>
            </Grid>
            <Grid sx={{ textAlign: "right" }}>
              <Typography
                component="span"
                sx={{ fontWeight: "bold", marginRight: "25rem" }}
              >
                Raiting
              </Typography>
            </Grid>
          </Grid>

          {/* Информация о серии */}
          <Grid
            container
            spacing={3}
            sx={{
              padding: "20px 20px",
              backgroundColor: "#191919",
              margin: "10px 0",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Typography>Pilot (Season 1, Episode 1)</Typography>
            </Grid>
            <Grid sx={{ textAlign: "center" }}>
              <Typography>2024-06-24</Typography>
            </Grid>
            <Grid
              sx={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Рейтинг со звездами */}
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{
                    color: index < 4 ? "#e50914" : "gray",
                    fontSize: "18px",
                  }}
                />
              ))}
              <Typography
                component="span"
                sx={{ marginLeft: 1, marginRight: "20rem" }}
              >
                3.5
              </Typography>
            </Grid>
          </Grid>
          {/* Информация о серии */}
          <Grid
            container
            spacing={3}
            sx={{
              padding: "20px 20px",
              backgroundColor: "#191919",
              margin: "10px 0",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Typography component="span">
                The Fire (Season 1, Episode 2)
              </Typography>
            </Grid>
            <Grid sx={{ textAlign: "center" }}>
              <Typography component="span">2024-07-24</Typography>
            </Grid>
            <Grid
              sx={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* Рейтинг со звездами */}
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{
                    color: index < 4 ? "#e50914" : "gray",
                    fontSize: "18px",
                  }}
                />
              ))}
              <Typography
                component="span"
                sx={{ marginLeft: 1, marginRight: "20rem" }}
              >
                3.5
              </Typography>
            </Grid>
          </Grid>
          {/* Информация о серии */}
          <Grid
            container
            spacing={3}
            sx={{
              padding: "20px 20px",
              backgroundColor: "#191919",
              margin: "10px 0",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Typography component="span">
                Manhunt (Season 1, Episode 3)
              </Typography>
            </Grid>
            <Grid sx={{ textAlign: "center" }}>
              <Typography component="span">2024-08-24</Typography>
            </Grid>
            <Grid
              sx={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* Рейтинг со звездами */}
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{
                    color: index < 4 ? "#e50914" : "gray",
                    fontSize: "18px",
                  }}
                />
              ))}
              <Typography
                component="span"
                sx={{ marginLeft: 1, marginRight: "20rem" }}
              >
                3.5
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}

export default TabsComponent;
