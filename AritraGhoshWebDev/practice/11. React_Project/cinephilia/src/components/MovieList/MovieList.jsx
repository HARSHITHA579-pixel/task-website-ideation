import React from 'react'
import './MovieList.css'
import Fire from '../../assets/fire.png'
import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <section className="movie-list">
        <header className="movie-list-header align-center">
            <h2 className="movie-list-heading align-center">Popular <img src={Fire} alt="fire emoji" className="navbar-emoji" /></h2>

            <div className="movie-list-fs align-center">
                <ul className="movie-filter align-center">
                    <li className="movie-filter-item active">8+ Star</li>
                    <li className="movie-filter-item">7+ Star</li>
                    <li className="movie-filter-item">6+ Star</li>
                </ul>

                <select name="" id="" className="movie-sorting">
                    <option value="">SortBy</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie-sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>
            </div>
        </header>

        <div className="movie-cards">
            <MovieCard />
        </div>
    </section>
  )
}

export default MovieList;
