// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/NUMEROS/01.mp4';
import video2 from './videos/NUMEROS/02.mp4';
import video3 from './videos/NUMEROS/03.mp4';
import video4 from './videos/NUMEROS/04.mp4';
import video5 from './videos/NUMEROS/05.mp4';
import video6 from './videos/NUMEROS/06.mp4';
import video7 from './videos/NUMEROS/07.mp4';
import video8 from './videos/NUMEROS/08.mp4';
import video9 from './videos/NUMEROS/09.mp4';
import video10 from './videos/NUMEROS/10.mp4';

const videos = [
  { id: 3, name: 'NÚMERO 3', url: video1 },
  { id: 2, name: 'NÚMERO 2', url: video2 },
  { id: 4, name: 'NÚMERO 4', url: video3 },
  { id: 5, name: 'NÚMERO 5', url: video4 },
  { id: 6, name: 'NÚMERO 6', url: video5 },
  { id: 7, name: 'NÚMERO 7', url: video6 },
  { id: 8, name: 'NÚMERO 8', url: video7 },
  { id: 1, name: 'NÚMERO 1', url: video8 },
  { id: 9, name: 'NÚMERO 9', url: video9 },
  { id: 10, name: 'NÚMERO 10', url: video10 },
];

const PagNumeros = () => {
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
          <h1>Números</h1>
          <input
            type="text"
            placeholder="Pesquisar número..."
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

export default PagNumeros;
