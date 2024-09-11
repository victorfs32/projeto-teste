import React from "react";
import Navbar from "../components/navbar";
import "./Sobre.css"; // Importa o arquivo CSS
import Footer from "../components/footer";

const Sobre = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="box">
          <h1 className="H1">NOSSA PAGINA</h1>
          <p className="description">
            Nosso objetivo é tornar a Língua Brasileira de Sinais (LIBRAS) acessível e interessante para todos. 
            Criamos um site interativo com jogos e atividades que facilitam o aprendizado de LIBRAS para alunos ouvintes 
            e um público mais amplo, incluindo pessoas em hospitais e escolas. Estamos comprometidos em promover a 
            comunicação inclusiva e desmistificar preconceitos, especialmente entre os jovens. Acreditamos que aprender 
            LIBRAS é essencial para quebrar barreiras e aproximar pessoas. Venha fazer parte dessa jornada conosco!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
