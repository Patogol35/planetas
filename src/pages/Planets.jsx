import { useEffect, useState } from "react";
import { searchImages } from "../api/nasa";
import PlanetCard from "../components/PlanetCard";
import SearchBar from "../components/SearchBar";
import { Container, Grid, Typography } from "@mui/material";
const PLANETS = [
  { name: "Mercury", description: "El planeta más cercano al Sol." },
  { name: "Venus", description: "El planeta más caliente del sistema solar." },
  { name: "Earth", description: "Nuestro hogar, el planeta azul." },
  { name: "Mars", description: "El planeta rojo, con posibilidades de vida pasada." },
  { name: "Jupiter", description: "El planeta más grande del sistema solar." },
  { name: "Saturn", description: "Famoso por sus impresionantes anillos." },
  { name: "Uranus", description: "Un planeta inclinado y helado." },
  { name: "Neptune", description: "El planeta más lejano del sistema solar." },
];
export default function Planets() {
  const [images, setImages] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    PLANETS.forEach((planet) => {
      searchImages(planet.name).then((res) => {
        setImages((prev) => ({
          ...prev,
          [planet.name]: res[0]?.links[0]?.href || "https://via.placeholder.com/400",
        }));
      });
    });
  }, []);
  const handleSearch = async (query) => {
    const res = await searchImages(query);
    setSearchResults(res.slice(0, 8)); // mostramos máximo 8 resultados
  };
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        🪐 Planetas del Sistema Solar
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {/* Resultados de búsqueda */}
      {searchResults.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom>
            🔎 Resultados de búsqueda
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {searchResults.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <PlanetCard
                  title={item.data[0].title}
                  description={item.data[0].description || "Imagen de la NASA"}
                  image={item.links[0].href}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {/* Sección fija de planetas */}
      <Typography variant="h4" gutterBottom>
        🌍 Planetas
      </Typography>
      <Grid container spacing={3}>
        {PLANETS.map((planet) => (
          <Grid item xs={12} sm={6} md={4} key={planet.name}>
            <PlanetCard
              title={planet.name}
              description={planet.description}
              image={images[planet.name]}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}