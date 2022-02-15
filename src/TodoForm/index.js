import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(prevState => !prevState);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla"
      />
      <div>
        <button type="button"
            onClick={() => setOpenModal(prevState => !prevState)}>
          Cancelar
        </button>
        <button type="submit">
          Añadir
        </button>
      </div>
    </form>
  )
}

export {TodoForm}