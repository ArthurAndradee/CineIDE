/* eslint-disable @next/next/no-img-element */
import React from 'react';
import movies from '@/app/movies/movies';
import './movies-container.css'

function MoviesContainer() {

    return (
        <div className='movie-posters-container'>
          <h1 className='movie-posters-title'>FILMES EM CARTAZ</h1>

          <div className='moive-posters-box'>
            {movies.map((movie) => (
            <div key={movie.name}>
                <img src={movie.imagem} alt={movie.name} />
            </div>
            ))}
          </div>
        </div>
      );
};

export default MoviesContainer;