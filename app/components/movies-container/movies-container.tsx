"use client"
import React, { useState } from 'react';
import movies from '@/app/database/movies'; // Certifique-se de que o caminho está correto
import './movies-container.css';

function MoviesContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para o filme selecionado

  const filteredMovies = movies.filter((movie) => {
    const searchLower = searchTerm.toLowerCase();
    
    return (
      movie.name.toLowerCase().includes(searchLower) ||
      movie.genero.toLowerCase().includes(searchLower) ||
      movie.diretores.some((diretor) => diretor.toLowerCase().includes(searchLower)) || 
      movie.atores.some((ator) => ator.toLowerCase().includes(searchLower))
    );
  });

  const handleClick = (movie) => {
    setSelectedMovie(movie); // Define o filme selecionado
  };

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
          <div key={movie.name} style={{ position: 'relative' }} onClick={() => handleClick(movie)}>
            <img src={movie.imagem} alt={movie.name} />
            {selectedMovie === movie && (
              <div className="tooltip">
                {movie.resenha}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesContainer;