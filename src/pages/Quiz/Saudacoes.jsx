import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css"; // CSS
import { useLocation, Link } from "react-router-dom";
import video1 from "./videos/SAUDAÇÕES/01.mp4";
import video2 from "./videos/SAUDAÇÕES/02.mp4";
import video3 from "./videos/SAUDAÇÕES/03.mp4";
import video4 from "./videos/SAUDAÇÕES/04.mp4";
import video5 from "./videos/SAUDAÇÕES/05.mp4";
import video6 from "./videos/SAUDAÇÕES/06.mp4";
import video7 from "./videos/SAUDAÇÕES/07.mp4";
import video8 from "./videos/SAUDAÇÕES/08.mp4";
import video9 from "./videos/SAUDAÇÕES/09.mp4";
import video10 from "./videos/SAUDAÇÕES/10.mp4";
import video11 from "./videos/SAUDAÇÕES/11.mp4";
import video12 from "./videos/SAUDAÇÕES/12.mp4";
import video13 from "./videos/SAUDAÇÕES/13.mp4";
import successSound from "./Path/success-sound.mp3";
import errorSound from "./Path/error-sound.mp3";

const videos = [
  video1, video2, video3, video4, video5, 
      video6, video7, video8, video9, video10, 
           video11, video12, video13,
];

const createQuestion = (text, video, answers) => ({
  questionText: text,
  videoSrc: video,
  answerOptions: answers,
});

const questions = [
  createQuestion("Qual a saudação?", video1, [
    { answerText: "Oi", isCorrect: true },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Tudo bem?", isCorrect: false },
    { answerText: "Obrigado", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video2, [
    { answerText: "Tchau", isCorrect: false },
    { answerText: "De nada", isCorrect: false },
    { answerText: "Bem", isCorrect: false },
    { answerText: "Tudo bem?", isCorrect: true },
  ]),
  createQuestion("Qual a saudação?", video3, [
    { answerText: "Boa sorte", isCorrect: false },
    { answerText: "Bom dia", isCorrect: true },
    { answerText: "Até logo", isCorrect: false },
    { answerText: "Desculpe", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video4, [
    { answerText: "Boa noite", isCorrect: true },
    { answerText: "Boa tarde", isCorrect: false },
    { answerText: "Boa sorte", isCorrect: false },
    { answerText: "Estou bem", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video5, [
    { answerText: "Beijos", isCorrect: true },
    { answerText: "Com licença", isCorrect: false },
    { answerText: "Obrigado!", isCorrect: false },
    { answerText: "Tudo bem", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video6, [
    { answerText: "Oi", isCorrect: false },
    { answerText: "Tchau", isCorrect: false },
    { answerText: "Bem-vindo", isCorrect: true },
    { answerText: "De nada", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video7, [
    { answerText: "Tchau", isCorrect: true },
    { answerText: "Tudo bem?", isCorrect: false },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Sim", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video8, [
    { answerText: "Sim", isCorrect: false },
    { answerText: "Desculpa", isCorrect: false },
    { answerText: "Boa tarde", isCorrect: false },
    { answerText: "Obrigado!", isCorrect: true },
  ]),
  createQuestion("Qual a saudação?", video9, [
    { answerText: "Bom dia", isCorrect: false },
    { answerText: "Com licença", isCorrect: true },
    { answerText: "Tudo bem", isCorrect: false },
    { answerText: "Boa sorte", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video10, [
    { answerText: "Olá", isCorrect: false },
    { answerText: "Bom dia", isCorrect: false },
    { answerText: "Desculpe", isCorrect: true },
    { answerText: "Beijos", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video11, [
    { answerText: "Boa tarde", isCorrect: true },
    { answerText: "Bom dia", isCorrect: false },
    { answerText: "Boa noite", isCorrect: false },
    { answerText: "Bom", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video12, [
    { answerText: "Olá", isCorrect: true },
    { answerText: "Oi", isCorrect: false },
    { answerText: "Tchau", isCorrect: false },
    { answerText: "Estou bem", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video13, [
    { answerText: "Por favor", isCorrect: true },
    { answerText: "Beijos", isCorrect: false },
    { answerText: "Desculpe", isCorrect: false },
    { answerText: "Não", isCorrect: false },
  ]),
  // Continue adicionando as perguntas aqui da mesma forma
];

function Saudacoes() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [rankingPosition, setRankingPosition] = useState(null);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);
  const location = useLocation();
  const userName = location.state?.userName || "Usuário";

  const successAudio = useRef(new Audio(successSound));
  const errorAudio = useRef(new Audio(errorSound));

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (showScore) {
      // Atualiza a posição no ranking após mostrar a pontuação
      const position = getRankingPosition();
      setRankingPosition(position);
    }
  }, [showScore]);

  const playSound = (audioRef) => {
    audioRef.current.play();
  };

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswerIndex(index);

    if (isCorrect) {
      setScore(score + 1);
      playSound(successAudio);
    } else {
      playSound(errorAudio);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setSelectedAnswerIndex(null);
        setCurrentQuestion(nextQuestion);
      } else {
        clearInterval(intervalRef.current);
        setShowScore(true);
        saveScore(userName, score, elapsedTime);
      }
    }, 100);
  };

  const saveScore = (userName, score, timeTaken) => {
    const savedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    const newScore = { userName, score, timeTaken };
    savedScores.push(newScore);
    localStorage.setItem("quizScores", JSON.stringify(savedScores));
  };

  const getRankingPosition = () => {
    const savedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    const sortedScores = savedScores.sort(
      (a, b) => b.score - a.score || a.timeTaken - b.timeTaken
    );
    return (
      sortedScores.findIndex(
        (entry) =>
          entry.userName === userName &&
          entry.score === score &&
          entry.timeTaken === elapsedTime
      ) + 1
    );
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2 className="congratulations-message">
            {userName}, Parabéns! Você acertou{" "}
            <span className="score-highlight">{score}</span> de{" "}
            <span className="score-highlight">{questions.length}</span>{" "}
            perguntas!
          </h2>
          <p className="completion-time">
            Você completou o quiz em{" "}
            <span className="time-highlight">{formatTime(elapsedTime)}</span>.
          </p>
          <p className="ranking-position">
            Sua posição no ranking é:{" "}
            <span className="ranking-highlight">
              {rankingPosition !== null ? rankingPosition : "Carregando..."}
            </span>
          </p>
          <div className="navigation-buttons">
            <Link to="/" className="btn return-button">
              Voltar para a página inicial
            </Link>
            <Link to="/Ranking" className="btn ranking-button">
              Ver Ranking
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-header">
              <span className="question-count">
                Pergunta {currentQuestion + 1}/{questions.length}
              </span>
              <div className="timer">
                Tempo Decorrido:{" "}
                <span className="time-highlight">
                  {formatTime(elapsedTime)}
                </span>
              </div>
            </div>
            <div className="question-content">
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
              <div className="video-container">
                <video ref={videoRef} width="100%" height="315" controls>
                  <source
                    src={questions[currentQuestion].videoSrc}
                    type="video/mp4"
                  />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect, index)
                  }
                  className={`answer-button ${
                    selectedAnswerIndex === index
                      ? answerOption.isCorrect
                        ? "correct"
                        : "incorrect"
                      : ""
                  }`}
                  disabled={selectedAnswerIndex !== null}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Saudacoes;
