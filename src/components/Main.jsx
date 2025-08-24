//Usando Component para seguir exemplo do professor
import React, { Component } from "react";

//Form
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: ["Fazer", "Beber", "Estudar"],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            className="input_novaTarefa"
            type="text"
            value={novaTarefa}
            name="novaTarefa"
          />
          <button type="submit">+{/*  <FaPlus /> */}</button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            // atribuindo um key único, o próprio index
            <li key={index}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
