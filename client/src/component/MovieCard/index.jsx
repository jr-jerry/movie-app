import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovieCard({movie}) {
    const {primaryTitle,primaryImage,rating,plot}=movie;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 ,
            objectFit:'cover'
        }}
        image={primaryImage.url}
        title="movie image title"

      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {primaryTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {plot}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
