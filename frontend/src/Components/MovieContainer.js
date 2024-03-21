import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const MovieContainer = () => {
  const movie = useSelector(store=>store.movie);
  console.log("movie container" ,movie);
  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-10'>
    <MovieList title={"Popular Movies"} movies={movie.nowPlayingMovie}/>
    <MovieList title={"Now Playing Movies"} movies={movie.popularMovie}/>
    <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovie}/>
    <MovieList title={"upcoming Movies"} movies={movie.upcomingMovie}/>
    </div>
     
    </div>
  )
}

export default MovieContainer
