import React, { useContext, useState } from "react";
import { List } from "../../context";

export default function ListCreate() {
  const { list, setList } = useContext(List);

  return (
    <div>
      <h1>Atividades</h1>
      <ul>
        {list.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}
