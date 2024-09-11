import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/SAUDAÇÕES/01.mp4';
import video2 from './videos/SAUDAÇÕES/02.mp4';
import video3 from './videos/SAUDAÇÕES/03.mp4';
import video4 from './videos/SAUDAÇÕES/04.mp4';
import video5 from './videos/SAUDAÇÕES/05.mp4';
import video6 from './videos/SAUDAÇÕES/06.mp4';
import video7 from './videos/SAUDAÇÕES/07.mp4';
import video8 from './videos/SAUDAÇÕES/08.mp4';
import video9 from './videos/SAUDAÇÕES/09.mp4';
import video10 from './videos/SAUDAÇÕES/10.mp4';
import video11 from './videos/SAUDAÇÕES/11.mp4';
import video12 from './videos/SAUDAÇÕES/12.mp4';
import video13 from './videos/SAUDAÇÕES/13.mp4';

const videos = [
  { id: 3, name: 'OI', url: video1 },
  { id: 2, name: 'TUDO BEM?', url: video2 },
  { id: 4, name: 'BOM DIA', url: video3 },
  { id: 5, name: 'BOA NOITE', url: video4 },
  { id: 6, name: 'BEIJOS', url: video5 },
  { id: 7, name: 'BEM-VINDO', url: video6 },
  { id: 8, name: 'TCHAU', url: video7 },
  { id: 1, name: 'OBRIGADO!', url: video8 },
  { id: 9, name: 'COM LICENÇA', url: video9 },
  { id: 10, name: 'DESCULPE', url: video10 },
  { id: 11, name: 'BOA TARDE', url: video11 },
  { id: 12, name: 'OLÁ', url: video12 },
  { id: 13, name: 'POR FAVOR', url: video13 },
];

const PagSaudacoes = () => {
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
          <h1>Saudações</h1>
          <input
            type="text"
            placeholder="Pesquisar saudações..."
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

export default PagSaudacoes;
