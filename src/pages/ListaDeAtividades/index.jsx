import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "../../context";
import "./styles.css"

export default function ListaAtividade() {
  const [activityName, setActivityName] = useState("");
  const { list, setList } = useContext(List);

  function AddAtividade(e) {
    e.preventDefault();
    setList([...list, activityName]);
    
  }

  return (
    <div className="container">
      <h1>Criar atividade</h1>
      <input
        type="text"
        value={activityName}
        onChange={(e) => setActivityName(e.target.value)}
      />
      <button onClick={AddAtividade}>Adicionar atividade</button>
      <Link to="/view">Ver listas</Link>
    </div>
  );
}
