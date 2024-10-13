/* eslint-disable @next/next/no-img-element */
import React from 'react';
import movies from '@/app/movies/movies';
import './movies-container.css'

function MoviesContainer() {

    return (
        <div>
          <h1>Filmes em cartaz</h1>

          <div>
            {movies.map((movie) => (
            <div style={{height:'11rem', width:'9rem'}} key={movie.name}>
                <img src={movie.imagem} alt={movie.name} />
            </div>
            ))}
          </div>
        </div>
      );
};

export default MoviesContainer;