import React from "react";

// Router
import { Link } from 'react-router-dom';

// Styles
import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie thumbnail" />
        </Link>
      ) : (
        <Image src={image} alt="movie thumbnail" />
      )}
    </div>
  );
};

export default Thumbnail;
