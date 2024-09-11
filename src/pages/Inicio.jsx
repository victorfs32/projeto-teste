/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../pages/Inicio.css"; // Importa o CSS para a página de início

function Inicio() {
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário
  const [selectedQuiz, setSelectedQuiz] = useState("Numeros"); // Estado para armazenar o quiz selecionado
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro
  const [welcomeMessage, setWelcomeMessage] = useState(""); // Estado para armazenar a mensagem de boas-vindas
  const navigate = useNavigate(); // Hook para navegação programática

  useEffect(() => {
    // Recupera o nome do usuário do backend
    const fetchUserName = async () => {
      try {
        const response = await axios.get("https://backend-eosin-chi-12.vercel.app/api/user");
        if (response.data.userName) {
          setUserName(response.data.userName);
          setWelcomeMessage(`Bem-vindo de volta, ${response.data.userName}!`);
        }
      } catch (error) {
        console.error("Erro ao recuperar o nome do usuário:", error);
      }
    };

    fetchUserName();
  }, []);

  const handleInputChange = (e) => {
    setUserName(e.target.value); // Atualiza o estado do nome do usuário
  };

  const handleQuizChange = (e) => {
    setSelectedQuiz(e.target.value); // Atualiza o estado do quiz selecionado
  };

  const handleInicio = async () => {
    // Valida se o nome do usuário foi inserido
    if (userName.trim()) {
      try {
        await axios.post("https://backend-eosin-chi-12.vercel.app/api/user", { userName });
        setWelcomeMessage(`Bem-vindo, ${userName}!`);
        navigate(`/${selectedQuiz}`, { state: { userName } }); // Navega para o quiz selecionado
      } catch (error) {
        console.error("Erro ao salvar o nome do usuário:", error);
        setError("Ocorreu um erro ao salvar seu nome. Tente novamente.");
      }
    } else {
      setError("Por favor, insira seu nome!"); // Exibe uma mensagem de erro se o nome não for inserido
    }
  };

  return (
    <div className="start-quiz">
      <h1>{welcomeMessage || "Bem-vindo ao Quiz!"}</h1>
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
