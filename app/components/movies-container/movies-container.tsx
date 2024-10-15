/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import movies from '@/app/database/movies';
import './movies-container.css';

function MoviesContainer() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter((movie) => {
    const searchLower = searchTerm.toLowerCase();
    
    return (
      movie.name.toLowerCase().includes(searchLower) ||
      movie.genero.toLowerCase().includes(searchLower) ||
      movie.diretores.some((diretor: string) => diretor.toLowerCase().includes(searchLower)) || 
      movie.atores.some((actor: string) => actor.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="movie-posters-container">
      <h1 className="movie-posters-title">FILMES EM CARTAZ</h1>
      
      <input
        type="text"
        placeholder="Pesquise por nomes, gêneros, autores, diretores..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="movie-posters-box">
        {filteredMovies.map((movie) => (
          <div key={movie.name}>
            <img src={movie.imagem} alt={movie.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesContainer;