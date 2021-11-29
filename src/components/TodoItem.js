/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            checked={todo.completed}
            className={styles.checkbox}
            onChange={() => handleChangeProps(todo.id)}
          />
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            <FaTrash />
          </button>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={todo.title}
          onChange={(e) => {
            setUpdate(e.target.value, todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: () => { },
  deleteTodoProps: () => { },
  setUpdate: () => { },
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodoItem;
