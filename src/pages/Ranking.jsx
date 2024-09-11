import { useState, useEffect } from "react";
import axios from 'axios';
import "./Ranking.css";

function Ranking() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar pontuações do backend
    const fetchScores = async () => {
      try {
        const response = await axios.get("https://backend-eosin-chi-12.vercel.app/ranking");
        setScores(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar as pontuações:", error);
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Ordenar as pontuações pelo menor tempo
  const sortedScores = scores.sort((a, b) => a.timeTaken - b.timeTaken);

  return (
    <>
      <div className="ranking">
        <h1>Ranking</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Usuário</th>
                <th>Pontuação</th>
                <th>Tempo</th>
              </tr>
            </thead>
            <tbody>
              {sortedScores.length > 0 ? (
                sortedScores.map((score, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{score.userName}</td>
                    <td>{score.score} pontos</td>
                    <td>{formatTime(score.timeTaken)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Nenhum resultado salvo</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Ranking;
