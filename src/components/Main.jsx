//Usando Component para seguir exemplo do professor
import React, { Component, createRef } from "react";

//Form
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";

export default class Main extends Component {
  // Crie a Ref no constructor (pode ser aqui ou no constructor)
  inputRef = createRef();

  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
    // REMOVA: button: document.querySelector(".btn"),
    isEditing: false, // NOVO: Estado para mudar o estilo do botão
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    //VALIDAÇÕES
    //if (tarefas.indexOf(novaTarefa) !== -1) return;
    if (tarefas.includes(novaTarefa)) return;
    if (novaTarefa === "") {
      return;
    }

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "", // Limpa o input
        isEditing: false, // Retorna o botão ao estado de adicionar
      });
    }

    //INPUT FOCUS
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState(
      {
        index,
        novaTarefa: tarefas[index],
        isEditing: true, // Define o estado para mudar o estilo do botão
      },
      () => {
        // 2. Foca o input após a atualização do estado
        if (this.inputRef.current) {
          this.inputRef.current.focus();
        }
      }
    );
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas, isEditing } = this.state;

    // Constrói a string de classes condicionalmente
    const buttonClass = isEditing ? "btn button_blue" : "btn button_red";

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            ref={this.inputRef}
            onChange={this.handleChange}
            className="input_novaTarefa"
            type="text"
            value={novaTarefa}
            name="novaTarefa"
          />
          <button className={buttonClass} type="submit">
            {/* O estilo muda com base na classe 'buttonClass' */}
            {isEditing ? <FaEdit /> : <FaPlus />}
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            // atribuindo um key único, o próprio index
            <li key={tarefa + index}>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
