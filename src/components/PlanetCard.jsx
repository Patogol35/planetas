import { Card, CardMedia, CardContent, Typography } from "@mui/material";
export default function PlanetCard({ title, description, image }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}