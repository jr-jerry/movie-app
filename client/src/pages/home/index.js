import { useEffect } from "react";
import NavBar from "../../component/Navbar"
import {fetchMovie} from '../../api/movies'
import {useSelector,useDispatch} from 'react-redux'
import MovieCard from "../../component/MovieCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const Home=()=>{
    const movieData=useSelector(state=>state.movie.data);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchMovie());
    },[])
    return (
        <>
        <NavBar/>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
            (movieData?.titles?.length>0)?movieData.titles.map(
                title=>{
                    return <Grid key={title.id} size={{ xs: 2, sm: 4, md: 3 }}>
                                
                                    <MovieCard  movie={title}/>
                                
                          </Grid>
                }
            ):"loading"
            }
            </Grid>
        </Box>
        
        
        </>
    )
}
export default Home;