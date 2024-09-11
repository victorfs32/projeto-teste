import React, { useState } from "react";
import Navbar from "./navbar";
import "./Pag.css";

// Importar os vídeos
import video1 from "./videos/UNIDADES/Biomédico.mov";
import video2 from "./videos/UNIDADES/CAPS.mov";
import video3 from "./videos/UNIDADES/Cesariana.mov";
import video4 from "./videos/UNIDADES/Dentista.mov";
import video5 from "./videos/UNIDADES/Educador físico.mov";
import video6 from "./videos/UNIDADES/Enfermeiro.mov";
import video7 from "./videos/UNIDADES/Farmacêutico.mov";
import video8 from "./videos/UNIDADES/Farmácia.mov";
import video9 from "./videos/UNIDADES/Fisioterapeuta.mov";
import video10 from "./videos/UNIDADES/Fonoaudióloga.mov";
import video11 from "./videos/UNIDADES/Hospital.mov";
import video12 from "./videos/UNIDADES/Maternidade.mov";
import video13 from "./videos/UNIDADES/Médico veterinário.mov";
import video14 from "./videos/UNIDADES/Médico.mov";
import video15 from "./videos/UNIDADES/Nutricionista.mov";
import video16 from "./videos/UNIDADES/Parto normal.mov";
import video17 from "./videos/UNIDADES/Profissional da saúde.mov";
import video18 from "./videos/UNIDADES/Psicóloga.mov";
import video19 from "./videos/UNIDADES/Samu_ ambulância(1).mov";
import video20 from "./videos/UNIDADES/Samu_ ambulância.mov";
import video21 from "./videos/UNIDADES/Terapia ocupacional.mov";
import video22 from "./videos/UNIDADES/Técnico de enfermagem.mov";
import video23 from "./videos/UNIDADES/Unidade básica de saúde( UBS).mov";
import video24 from "./videos/UNIDADES/Unidade de saúde.mov";
import video25 from "./videos/UNIDADES/UPA.mov";
import video26 from "./videos/UNIDADES/Urgência e emergência.mov";

const videos = [
  { id: 1, name: "BIOMÉDICINA", url: video1 },
  { id: 2, name: "CAPS", url: video2 },
  { id: 3, name: "CESARIANA", url: video3 },
  { id: 4, name: "DENTISTA", url: video4 },
  { id: 5, name: "EDUCADOR FÍSICO", url: video5 },
  { id: 6, name: "ENFERMEIRO", url: video6 },
  { id: 7, name: "FARMACÊUTICO", url: video7 },
  { id: 8, name: "FARMÁCIA!", url: video8 },
  { id: 9, name: "FISIOTERAPEUTA", url: video9 },
  { id: 10, name: "FONOAUDIÓLOGA", url: video10 },
  { id: 11, name: "HOSPITAL", url: video11 },
  { id: 12, name: "MATERNIDADE", url: video12 },
  { id: 13, name: "MÉDICO VETERINARIO", url: video13 },
  { id: 14, name: "MÉDICO", url: video14 },
  { id: 15, name: "NUTRICIONISTA", url: video15 },
  { id: 16, name: "PARTO NORMAL!", url: video16 },
  { id: 17, name: "PROFISSIONAL DA SAÚDE", url: video17 },
  { id: 18, name: "PSICÓLOGA", url: video18 },
  { id: 19, name: "SAMU AMBULÂNCIA", url: video19 },
  { id: 20, name: "SAMU AMBULÂNCIA", url: video20 },
  { id: 21, name: "TERAPIA OCUPACIONAL", url: video21 },
  { id: 22, name: "TÉCNICO DE ENFERMAGEM", url: video22 },
  { id: 23, name: "UNIDADE BASICA DE SAÚDE", url: video23 },
  { id: 24, name: "UNIDADE DE SAÚDE", url: video24 },
  { id: 25, name: "UPA", url: video25 },
  { id: 26, name: "URGÊNCIA E EMERGÊNCIA", url: video26 },
];

const PagUnidades = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra os vídeos e mantém a ordem correta
  const filteredVideos = videos
    .filter((video) =>
      video.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.id - b.id); // Ordena pelos ids em ordem crescente

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Unidades</h1>
          <input
            type="text"
            placeholder="Pesquisar Unidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </header>
        <div className="video-grid">
          {filteredVideos.map((video) => (
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

export default PagUnidades;
