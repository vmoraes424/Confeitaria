import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Swal from "sweetalert2";

export default function App() {
  const [receitas, setReceitas] = useState([]);
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modo, setModo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const receita = {
      nome,
      ingredientes,
      modo,
    };
    if (nome === "" || ingredientes === "" || modo === "") {
      Swal.fire("Erro", "Preencha todos os campos", "error");
      return;
    } else {
      setReceitas([...receitas, receita]);
      setNome("");
      setIngredientes("");
      setModo("");
    }
  }

  const receitada = receitas.map((receita) => (
    <div className="receita">
      <h2>{receita.nome}</h2>
    </div>
  ));

  return (
    <>
      <Nav />
      <main>
        <div className="esquerda">
          <div className="cima">
            <h1>Cadastre uma nova receita</h1>
            <img src="./public/imgs/livro.png" alt="" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome da receita</label>
            <input
              type="text"
              name="nome"
              value={nome}
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="ingredientes">Ingredientes</label>
            <textarea
              name="ingredientes"
              id="ingredientes"
              cols="30"
              value={ingredientes}
              rows="10"
              onChange={(e) => setIngredientes(e.target.value)}
            ></textarea>
            <label htmlFor="modo">Modo de preparo</label>
            <textarea
              name="modo"
              id="modo"
              cols="30"
              value={modo}
              rows="10"
              onChange={(e) => setModo(e.target.value)}
            ></textarea>
            <button type="submit">Adicionar</button>
          </form>
        </div>
        <div className="direita">
          <h1>Receitas</h1>
          <div className="receitas">
            {receitas.length === 0 ? (
              <h1>Nenhuma receita cadastrada</h1>
            ) : (
              receitada
            )}
          </div>
        </div>
      </main>
    </>
  );
}
