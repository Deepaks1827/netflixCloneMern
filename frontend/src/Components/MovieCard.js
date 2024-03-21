import React from 'react'
import { Banner_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setOpen , setId} from '../redux/movieSlice';

const MovieCard = ({posterPath},movieId) => {
  const dispatch = useDispatch();
  

  if(posterPath===null) return null;
  const handleOpen = () =>{
    dispatch(setId(movieId));
    dispatch(setOpen(true));
  }

  return (
    <div className='p-2 w-48' onClick={handleOpen}>
        <img src={`${ Banner_URL }${posterPath}`} alt='Movie Banner.' />
    </div>
  )
}

export default MovieCard