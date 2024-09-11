import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/PESSOAS/Adulto.mov';
import video2 from './videos/PESSOAS/Bebê.mov';
import video3 from './videos/PESSOAS/Homem.mov';
import video4 from './videos/PESSOAS/Idoso.mov';
import video5 from './videos/PESSOAS/Mulher.mov';

const videos = [
  { id: 1, name: 'ADULTO', url: video1 },
  { id: 2, name: 'BEBÊ', url: video2 },
  { id: 3, name: 'HOMEM', url: video3 },
  { id: 4, name: 'IDOSO', url: video4 },
  { id: 5, name: 'MULHER', url: video5 },
];

const PagPessoas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra os vídeos e mantém a ordem correta
  const filteredVideos = videos
    .filter(video => video.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.id - b.id); // Ordena pelos ids em ordem crescente

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Pessoas</h1>
          <input
            type="text"
            placeholder="Pesquisar Pessoa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </header>
        <div className="video-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-item">
              <video controls>
                <source src={video.url} type="video/mp4" />
                Seu navegador não suporta o formato de vídeo.
              </video>
              <div className="video-description">{video.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PagPessoas;
