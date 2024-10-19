/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import movies from '@/app/database/movies'; 
import './movies-container.css';

interface Movie {
  name: string;
  genero: string;
  diretores: string[];
  atores: string[];
  imagem: string;
  resenha: string;
}

function MoviesContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = movies.filter((movie: Movie) => {
    const searchLower = searchTerm.toLowerCase();
    
    return (
      movie.name.toLowerCase().includes(searchLower) ||
      movie.genero.toLowerCase().includes(searchLower) ||
      movie.diretores.some((diretor) => diretor.toLowerCase().includes(searchLower)) || 
      movie.atores.some((ator) => ator.toLowerCase().includes(searchLower))
    );
  });

  const handleClick = (movie: Movie | null) => {
    setSelectedMovie(movie);
  };

  return (
    <div id="catalogo" className="movie-posters-container">
      <h1 className="movie-posters-title">FILMES EM CARTAZ</h1>
      
      <input
        type="text"
        placeholder="Pesquise por nomes, gêneros, autores, diretores..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="movie-posters-box">
        {filteredMovies.map((movie: Movie) => (
          <div key={movie.name} style={{ position: 'relative' }} onClick={() => handleClick(selectedMovie === movie ? null : movie)}>
            <img src={movie.imagem} alt={movie.name} />
            {selectedMovie === movie && (
              <div className="tooltip">
                {movie.resenha}
                <button className="btn" onClick={() => handleClick(null)}>Fechar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesContainer;