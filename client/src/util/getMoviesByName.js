export const getMoviesByName=function (movies,searchData){
    console.log('movies ',movies?.titles,'searchData ',searchData);
    const moviesTitle=movies?.titles;

    if(!searchData || searchData.trim().length==0){
        return movies.titles;
    }
    const filteredMovie=(searchData.length>0)?(moviesTitle.length>0 && moviesTitle.filter(title=>title.primaryTitle.toLowerCase().includes(searchData.toLowerCase()))):moviesTitle;

    console.log(filteredMovie);
    return filteredMovie;
}