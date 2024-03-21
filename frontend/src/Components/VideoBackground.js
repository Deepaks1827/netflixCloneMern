import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({movieId,bool}) => {
  const trailerMovie = useSelector(store=>store.movie.trailerMovie);
  // console.log("AYAA",trailerMovie);
  console.log("Key mil gyi",trailerMovie);
  const tailerobj = trailerMovie?.find((el)=>el.type==='Trailer')
  console.log("Key mil tailerobj",tailerobj);

  useMovieById(movieId);
  return (
    <div className="w-screen ">
      <iframe
        className={`${bool ? "w-[100%]":"w-screen & aspect-video"} `}
        src={`https://www.youtube.com/embed/${tailerobj?.key}?si=IuMuGRCGImgMa_D_&mute=1&autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
