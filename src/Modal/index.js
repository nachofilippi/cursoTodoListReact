import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';
import './Modal.css';


function Modal({ children }) {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const closeModal = () => {
    setOpenModal(prevState => !prevState);
  };

  return ReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
      <button onClick={closeModal}>X</button>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
