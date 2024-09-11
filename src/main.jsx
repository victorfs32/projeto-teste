import ReactDOM from "react-dom/client"; // Importa o método correto para React 18
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Alfabeto from "./pages/Quiz/Alfabeto";
import Saudacoes from "./pages/Quiz/Saudacoes";
import Numeros from "./pages/Quiz/Numeros";
import Navbar from "./components/navbar";
import Sobre from "./pages/Sobre";
import Inicio from "./pages/Inicio"; // Importa a nova página
import Ranking from "./pages/Ranking";
import PagAlfabeto from "./components/PagAlfabeto";
import PagNumeros from "./components/PagNumeros";
import PagSaudacoes from "./components/PagSaudacoes";
import PagPessoas from "./components/PagPessoas";
import PagUnidades from "./components/PagUnidades";

// Cria a raiz do React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o aplicativo
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Inicio" element={<Inicio />} /> {/* Nova rota */}
      <Route path="/Alfabeto" element={<Alfabeto />} />
      <Route path="/Saudacoes" element={<Saudacoes />} />
      <Route path="/Numeros" element={<Numeros />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/PagAlf" element={<PagAlfabeto />} />
      <Route path="/PagNúm" element={<PagNumeros />} />
      <Route path="/PagSau" element={<PagSaudacoes />} />
      <Route path="/PagPess" element={<PagPessoas />} />
      <Route path="/PagUni" element={<PagUnidades />} />
    </Routes>
  </BrowserRouter>
);
