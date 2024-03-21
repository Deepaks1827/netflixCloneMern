import axios from 'axios';

import {  options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovies } from '../redux/movieSlice';
import { useEffect } from 'react';


const useMovieById = async (movieId) => {
    
    // console.log("hererre id",movieId)
    const dispatch = useDispatch();
   
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
                console.log("Data received:", res.data);
                dispatch(getTrailerMovies(res.data.results));
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
    
        fetchData();
    
        return () => {
            // Cleanup code if necessary
        };
    }, [dispatch, movieId]); // Ensure dispatch and movieId are included in the dependency array
    
}

export default useMovieById