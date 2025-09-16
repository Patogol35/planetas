import { useEffect, useState } from "react";
import { getApod } from "../api/nasa";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
export default function Home() {
  const [apod, setApod] = useState(null);
  useEffect(() => {
    getApod().then(setApod);
  }, []);
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        🌌 Bienvenido a la App de Planetas
      </Typography>
      {apod && (
        <Card sx={{ mb: 4 }}>
          <CardMedia component="img" image={apod.url} alt={apod.title} />
          <CardContent>
            <Typography variant="h5">{apod.title}</Typography>
            <Typography variant="body2">{apod.explanation}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}