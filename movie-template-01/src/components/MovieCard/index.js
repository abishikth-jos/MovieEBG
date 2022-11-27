import React from "react";
import { BsStarFill } from "react-icons/bs";
import { extractImgPoster } from "utils/extractImg";

const MovieCard = ({ singlePopularMovie }) => {
  return (
    <div className="space-y-5">
      <div className="relative rounded-md overflow-hidden hover:scale-105 md:hover:scale-110 transition-all">
        <img
          src={extractImgPoster(singlePopularMovie.poster_path)}
          className="rounded-md shadow-lg"
          alt={singlePopularMovie.title}
        />
        <p className="flex space-x-2 items-center absolute top-0 right-0 bg-red-500 px-1">
          <span className="text-xl text-white-500">
            <BsStarFill />
          </span>
          <span className="pt-1">{singlePopularMovie.vote_average}</span>
        </p>
      </div>
      <div className="space-y-2">
        {singlePopularMovie.title ? (
          <h3>{singlePopularMovie.title}</h3>
        ) : (
          <h3>{singlePopularMovie.name}</h3>
        )}
        <p className="text-gray-500">{singlePopularMovie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
