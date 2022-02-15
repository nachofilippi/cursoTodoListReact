import React from 'react';
import './CreateTodoList.css';

function CreateTodoList(props) {
  const onClickButton = () => {
    props.setOpenModal(true)
  };

  return (
    <button className='CreateTodoList'
      onClick={onClickButton}>
      +
    </button>
  )
}

export { CreateTodoList };