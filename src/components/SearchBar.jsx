import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Buscar en la NASA"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Buscar
        </Button>
      </Stack>
    </form>
  );
}