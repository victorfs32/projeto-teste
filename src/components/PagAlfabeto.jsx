import React, { useState } from 'react';
import Navbar from './navbar';
import './Pag.css';

// Importar os vídeos
import video1 from './videos/ABC/01.mp4';
import video2 from './videos/ABC/02.mp4';
import video3 from './videos/ABC/03.mp4';
import video4 from './videos/ABC/04.mp4';
import video5 from './videos/ABC/05.mp4';
import video6 from './videos/ABC/06.mp4';
import video7 from './videos/ABC/07.mp4';
import video8 from './videos/ABC/08.mp4';
import video9 from './videos/ABC/09.mp4';
import video10 from './videos/ABC/10.mp4';
import video11 from './videos/ABC/11.mp4';
import video12 from './videos/ABC/12.mp4';
import video13 from './videos/ABC/13.mp4';
import video14 from './videos/ABC/14.mp4';
import video15 from './videos/ABC/15.mp4';
import video16 from './videos/ABC/16.mp4';
import video17 from './videos/ABC/17.mp4';
import video18 from './videos/ABC/18.mp4';
import video19 from './videos/ABC/19.mp4';
import video20 from './videos/ABC/20.mp4';
import video21 from './videos/ABC/21.mp4';
import video22 from './videos/ABC/22.mp4';
import video23 from './videos/ABC/23.mp4';
import video24 from './videos/ABC/24.mp4';
import video25 from './videos/ABC/25.mp4';
import video26 from './videos/ABC/26.mp4';
import video27 from './videos/ABC/27.mp4';

const videos = [
  { id: 1, name: 'LETRA S', url: video1 },
  { id: 2, name: 'LETRA T', url: video2 },
  { id: 3, name: 'LETRA F', url: video3 },
  { id: 4, name: 'LETRA N', url: video4 },
  { id: 5, name: 'LETRA Z', url: video5 },
  { id: 6, name: 'LETRA L', url: video6 },
  { id: 7, name: 'LETRA R', url: video7 },
  { id: 8, name: 'LETRA K', url: video8 },
  { id: 9, name: 'LETRA Q', url: video9 },
  { id: 10, name: 'LETRA E', url: video10 },
  { id: 11, name: 'LETRA U', url: video11 },
  { id: 12, name: 'LETRA D', url: video12 },
  { id: 13, name: 'LETRA G', url: video13 },
  { id: 14, name: 'LETRA W', url: video14 },
  { id: 15, name: 'LETRA Ç', url: video15 },
  { id: 16, name: 'LETRA J', url: video16 },
  { id: 17, name: 'LETRA X', url: video17 },
  { id: 18, name: 'LETRA Y', url: video18 },
  { id: 19, name: 'LETRA V', url: video19 },
  { id: 20, name: 'LETRA M', url: video20 },
  { id: 21, name: 'LETRA A', url: video21 },
  { id: 22, name: 'LETRA I', url: video22 },
  { id: 23, name: 'LETRA O', url: video23 },
  { id: 24, name: 'LETRA C', url: video24 },
  { id: 25, name: 'LETRA H', url: video25 },
  { id: 26, name: 'LETRA B', url: video26 },
  { id: 27, name: 'LETRA P', url: video27 },
];

const PaginaAlfabeto = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra e ordena os vídeos em ordem alfabética
  const filteredVideos = videos
    .filter(video => video.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Letras Alfabéticas</h1>
          <input
            type="text"
            placeholder="Pesquisar letra..."
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

export default PaginaAlfabeto;
