import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css"; // CSS
import { useLocation, Link } from "react-router-dom";
import video1 from "./videos/ABC/01.mp4";
import video2 from "./videos/ABC/02.mp4";
import video3 from "./videos/ABC/03.mp4";
import video4 from "./videos/ABC/04.mp4";
import video5 from "./videos/ABC/05.mp4";
import video6 from "./videos/ABC/06.mp4";
import video7 from "./videos/ABC/07.mp4";
import video8 from "./videos/ABC/08.mp4";
import video9 from "./videos/ABC/09.mp4";
import video10 from "./videos/ABC/10.mp4";
import video11 from "./videos/ABC/11.mp4";
import video12 from "./videos/ABC/12.mp4";
import video13 from "./videos/ABC/13.mp4";
import video14 from "./videos/ABC/14.mp4";
import video15 from "./videos/ABC/15.mp4";
import video16 from "./videos/ABC/16.mp4";
import video17 from "./videos/ABC/17.mp4";
import video18 from "./videos/ABC/18.mp4";
import video19 from "./videos/ABC/19.mp4";
import video20 from "./videos/ABC/20.mp4";
import video21 from "./videos/ABC/21.mp4";
import video22 from "./videos/ABC/22.mp4";
import video23 from "./videos/ABC/23.mp4";
import video24 from "./videos/ABC/24.mp4";
import video25 from "./videos/ABC/25.mp4";
import video26 from "./videos/ABC/26.mp4";
import video27 from "./videos/ABC/27.mp4";
import successSound from "./Path/success-sound.mp3";
import errorSound from "./Path/error-sound.mp3";

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  video10,
  video11,
  video12,
  video13,
  video14,
  video15,
  video16,
  video17,
  video18,
  video19,
  video20,
  video21,
  video22,
  video23,
  video24,
  video25,
  video26,
  video27,
];

const createQuestion = (text, video, answers) => ({
  questionText: text,
  videoSrc: video,
  answerOptions: answers.sort(() => Math.random() - 0.5), // Embaralha as opções de resposta
});

const questions = [
  createQuestion("Qual a letra?", video1, [
    { answerText: "E", isCorrect: false },
    { answerText: "S", isCorrect: true },
    { answerText: "P", isCorrect: false },
    { answerText: "Q", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video2, [
    { answerText: "T", isCorrect: true },
    { answerText: "O", isCorrect: false },
    { answerText: "F", isCorrect: false },
    { answerText: "E", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video3, [
    { answerText: "B", isCorrect: false },
    { answerText: "A", isCorrect: false },
    { answerText: "F", isCorrect: true },
    { answerText: "O", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video4, [
    { answerText: "D", isCorrect: false },
    { answerText: "G", isCorrect: false },
    { answerText: "M", isCorrect: false },
    { answerText: "N", isCorrect: true },
  ]),
  createQuestion("Qual a letra?", video5, [
    { answerText: "S", isCorrect: false },
    { answerText: "Z", isCorrect: true },
    { answerText: "R", isCorrect: false },
    { answerText: "U", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video6, [
    { answerText: "I", isCorrect: false },
    { answerText: "L", isCorrect: true },
    { answerText: "Y", isCorrect: false },
    { answerText: "D", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video7, [
    { answerText: "N", isCorrect: false },
    { answerText: "R", isCorrect: true },
    { answerText: "D", isCorrect: false },
    { answerText: "V", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video8, [
    { answerText: "K", isCorrect: true },
    { answerText: "P", isCorrect: false },
    { answerText: "R", isCorrect: false },
    { answerText: "N", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video9, [
    { answerText: "G", isCorrect: false },
    { answerText: "I", isCorrect: false },
    { answerText: "Q", isCorrect: true },
    { answerText: "U", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video10, [
    { answerText: "E", isCorrect: true },
    { answerText: "X", isCorrect: false },
    { answerText: "J", isCorrect: false },
    { answerText: "S", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video11, [
    { answerText: "U", isCorrect: true },
    { answerText: "H", isCorrect: false },
    { answerText: "Q", isCorrect: false },
    { answerText: "G", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video12, [
    { answerText: "D", isCorrect: true },
    { answerText: "O", isCorrect: false },
    { answerText: "T", isCorrect: false },
    { answerText: "R", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video13, [
    { answerText: "G", isCorrect: true },
    { answerText: "E", isCorrect: false },
    { answerText: "C", isCorrect: false },
    { answerText: "Z", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video14, [
    { answerText: "W", isCorrect: true },
    { answerText: "K", isCorrect: false },
    { answerText: "M", isCorrect: false },
    { answerText: "E", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video15, [
    { answerText: "Ç", isCorrect: true },
    { answerText: "E", isCorrect: false },
    { answerText: "G", isCorrect: false },
    { answerText: "C", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video16, [
    { answerText: "J", isCorrect: true },
    { answerText: "G", isCorrect: false },
    { answerText: "I", isCorrect: false },
    { answerText: "Y", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video17, [
    { answerText: "X", isCorrect: true },
    { answerText: "I", isCorrect: false },
    { answerText: "J", isCorrect: false },
    { answerText: "B", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video18, [
    { answerText: "Y", isCorrect: true },
    { answerText: "A", isCorrect: false },
    { answerText: "F", isCorrect: false },
    { answerText: "S", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video19, [
    { answerText: "V", isCorrect: true },
    { answerText: "L", isCorrect: false },
    { answerText: "X", isCorrect: false },
    { answerText: "Y", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video20, [
    { answerText: "M", isCorrect: true },
    { answerText: "N", isCorrect: false },
    { answerText: "R", isCorrect: false },
    { answerText: "W", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video21, [
    { answerText: "A", isCorrect: true },
    { answerText: "G", isCorrect: false },
    { answerText: "O", isCorrect: false },
    { answerText: "B", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video22, [
    { answerText: "I", isCorrect: true },
    { answerText: "L", isCorrect: false },
    { answerText: "Y", isCorrect: false },
    { answerText: "J", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video23, [
    { answerText: "O", isCorrect: true },
    { answerText: "G", isCorrect: false },
    { answerText: "C", isCorrect: false },
    { answerText: "Q", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video24, [
    { answerText: "C", isCorrect: true },
    { answerText: "G", isCorrect: false },
    { answerText: "I", isCorrect: false },
    { answerText: "Z", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video25, [
    { answerText: "H", isCorrect: true },
    { answerText: "X", isCorrect: false },
    { answerText: "K", isCorrect: false },
    { answerText: "L", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video26, [
    { answerText: "B", isCorrect: true },
    { answerText: "X", isCorrect: false },
    { answerText: "H", isCorrect: false },
    { answerText: "N", isCorrect: false },
  ]),
  createQuestion("Qual a letra?", video27, [
    { answerText: "P", isCorrect: true },
    { answerText: "X", isCorrect: false },
    { answerText: "K", isCorrect: false },
    { answerText: "A", isCorrect: false },
  ]),
    // Continue adicionando as perguntas aqui da mesma forma
];

function Alfabeto() {
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

export default Alfabeto;