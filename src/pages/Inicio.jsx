/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Inicio.css"; // Importa o CSS para a página de início

function Inicio() {
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário
  const [selectedQuiz, setSelectedQuiz] = useState("Numeros"); // Estado para armazenar o quiz selecionado
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro
  const navigate = useNavigate(); // Hook para navegação programática

  useEffect(() => {
    // Recupera o nome do usuário salvo no localStorage
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleInputChange = (e) => {
    setUserName(e.target.value); // Atualiza o estado do nome do usuário
  };

  const handleQuizChange = (e) => {
    setSelectedQuiz(e.target.value); // Atualiza o estado do quiz selecionado
  };

  const handleInicio = () => {
    // Valida se o nome do usuário foi inserido
    if (userName.trim()) {
      localStorage.setItem("userName", userName); // Salva o nome do usuário no localStorage
      navigate(`/${selectedQuiz}`, { state: { userName } }); // Navega para o quiz selecionado
    } else {
      setError("Por favor, insira seu nome!"); // Exibe uma mensagem de erro se o nome não for inserido
    }
  };

  return (
    <div className="start-quiz">
      <h1>{userName ? `Bem-vindo de volta, ${userName}!` : "Bem-vindo ao Quiz!"}</h1>
      <input
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="Digite seu nome"
      />
      {error && <p className="error-message">{error}</p>} {/* Exibe a mensagem de erro, se houver */}
      <select value={selectedQuiz} onChange={handleQuizChange}>
        <option value="Numeros">Números</option>
        <option value="Alfabeto">Alfabeto</option>
        <option value="Saudacoes">Saudações</option>
      </select>
      <button onClick={handleInicio}>Iniciar Quiz</button>
    </div>
  );
}

export default Inicio;
