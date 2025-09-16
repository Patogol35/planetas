import { useState } from "react";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
export default function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🚀 NASA Planets
          </Typography>
          <Button color="inherit" onClick={() => setPage("home")}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => setPage("planets")}>
            Planetas
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        {page === "home" && <Home />}
        {page === "planets" && <Planets />}
      </Container>
    </>
  );
}