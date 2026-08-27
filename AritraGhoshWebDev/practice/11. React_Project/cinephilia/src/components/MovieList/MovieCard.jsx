import React from 'react';
import './MovieCard.css';
import Star from '../../assets/star.png';

const MovieCard = () => {
  return (
    <a href="" className="movie-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkB2U_1-LL8BraSx9uXbQ_8_tyWuq5YiqzP_6oUECXscI-mCk3jegHI4lU&s=10" alt="movie poster" className="movie-poster" />
        <div className="movie-details">
          <h3 className="movie-details-heading">Movie Name</h3>
          <div className="align-center movie-date-rate">
            <p>10-20-2020</p>
            <p>8.0 <img src={Star} alt="rating icon" className="card-emoji"/></p>
          </div>
          <p className="movie-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut libero, animi mollitia in labore.</p>
        </div>
    </a>
  )
};
import './MovieCard.css';

export default MovieCard;
