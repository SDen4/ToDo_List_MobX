import React from 'react';

import store from '../../store/store';

import classes from './Modal.module.css';

const Modal: React.FC = () => {
  const deleteHandler = () => {
    store.deleteTodo(store.delTodo.id);
    store.setModalFlag(false);
  };

  const cancelHandler = () => {
    store.setModalFlag(false);
  };

  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modalWindow}>
        <h3>Are you sure to delete todo # {store.delTodo.id} ?</h3>

        <span>"{store.delTodo.title}"</span>

        <div className={classes.btnsWrapper}>
          <button type="button" onClick={deleteHandler}>
            Delete
          </button>

          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
