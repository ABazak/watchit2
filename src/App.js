import SingleCard from "./components/SingleCard/SingleCard";
import Grid from "@mui/material/Grid2";

const mockData = [
  {
    id: 1,
    name: "Home Alone",
    image:
      "https://w0.peakpx.com/wallpaper/680/564/HD-wallpaper-home-alone-home-alone-2-lost-in-new-york-home-alone-2-kevin-mccallister-macaulay-culkin.jpg",
    time: "1hr: 50mins",
  },
  {
    id: 2,
    name: "Black Adam",
    image:
      "https://phantom-marca.unidadeditorial.es/91e29481dda0ea984150eac6d0a66ff1/resize/660/f/webp/assets/multimedia/imagenes/2022/10/20/16662900659621.jpg",
    time: "2hr: 10mins",
  },
  {
    id: 3,
    name: "Back to the Future",
    image:
      "https://www.metrotix.com/assets/img/BTTF-Logo-1024x540-withGuys-4744ce9f34.jpg",
    time: "2hr: 50mins",
  },
  {
    id: 4,
    name: "Avengers",
    image:
      "https://leclaireur.fnac.com/wp-content/uploads/2024/06/avengers-film.jpg",
    time: "2hr:30mins",
  },
];

function App() {
  const handleCardClick = (id) => {
    console.log(`Movie ID: ${id}`);
  };

  return (
    <div className="App">
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {mockData.map(({ id, name, time, image }, index) => {
          return (
            <Grid size={3} key={index}>
              <SingleCard
                id={id}
                name={name}
                time={time}
                image={image}
                makeClick={handleCardClick}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default App;
