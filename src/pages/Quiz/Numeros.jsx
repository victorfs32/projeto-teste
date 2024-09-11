import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Quiz.css"; // CSS
import successSound from "./Path/success-sound.mp3";
import errorSound from "./Path/error-sound.mp3";

// Importar os vídeos
import video1 from "./videos/NUMEROS/01.mp4";
import video2 from "./videos/NUMEROS/02.mp4";
import video3 from "./videos/NUMEROS/03.mp4";
import video4 from "./videos/NUMEROS/04.mp4";
import video5 from "./videos/NUMEROS/05.mp4";
import video6 from "./videos/NUMEROS/06.mp4";
import video7 from "./videos/NUMEROS/07.mp4";
import video8 from "./videos/NUMEROS/08.mp4";
import video9 from "./videos/NUMEROS/09.mp4";
import video10 from "./videos/NUMEROS/10.mp4";

const createQuestion = (text, video, answers) => ({
  questionText: text,
  videoSrc: video,
  answerOptions: answers,
});

// Lista de perguntas
const questions = [
  createQuestion("Que número é esse?", video1, [
    { answerText: "36", isCorrect: false },
    { answerText: "3", isCorrect: true },
    { answerText: "1", isCorrect: false },
    { answerText: "7", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video2, [
    { answerText: "2", isCorrect: true },
    { answerText: "6", isCorrect: false },
    { answerText: "4", isCorrect: false },
    { answerText: "9", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video3, [
    { answerText: "10", isCorrect: false },
    { answerText: "1", isCorrect: false },
    { answerText: "4", isCorrect: true },
    { answerText: "8", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video4, [
    { answerText: "8", isCorrect: false },
    { answerText: "7", isCorrect: false },
    { answerText: "3", isCorrect: false },
    { answerText: "5", isCorrect: true },
  ]),
  createQuestion("Que número é esse?", video5, [
    { answerText: "3", isCorrect: false },
    { answerText: "6", isCorrect: true },
    { answerText: "1", isCorrect: false },
    { answerText: "0", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video6, [
    { answerText: "1", isCorrect: false },
    { answerText: "7", isCorrect: true },
    { answerText: "9", isCorrect: false },
    { answerText: "4", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video7, [
    { answerText: "2", isCorrect: false },
    { answerText: "8", isCorrect: true },
    { answerText: "5", isCorrect: false },
    { answerText: "3", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video8, [
    { answerText: "1", isCorrect: true },
    { answerText: "4", isCorrect: false },
    { answerText: "10", isCorrect: false },
    { answerText: "8", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video9, [
    { answerText: "1", isCorrect: false },
    { answerText: "4", isCorrect: false },
    { answerText: "9", isCorrect: true },
    { answerText: "0", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video10, [
    { answerText: "10", isCorrect: true },
    { answerText: "1", isCorrect: false },
    { answerText: "3", isCorrect: false },
    { answerText: "6", isCorrect: false },
  ]),
];

function Numeros() {
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

export default Numeros;
