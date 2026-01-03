import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';


export default function MovieCard({movie}) {
    const {primaryTitle,primaryImage,rating,type,plot,genres}=movie;

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
        <Box sx={{display:'flex' ,flexWrap:'Wrap' ,gap:0.5, mb:1}}>
          {genres.map((genre,index)=>(
            <Chip
            key={index} label={genre} size="small" variant="outlined"
            />
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {plot}
        </Typography>
      </CardContent>
      <CardActions sx={{
        display:'flex',
        justifyContent:'space-between'
      }}>
         <Typography sx={{paddingX:1}}>{type.charAt(0).toUpperCase()+type.slice(1)}</Typography>
         <Typography sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:1
          }}>
          <StarIcon/>{rating?.aggregateRating}
         </Typography>
     
      </CardActions>
    </Card>
  );
}
