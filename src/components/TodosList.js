/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={handleChangeProps}
              deleteTodoProps={deleteTodoProps}
              setUpdate={setUpdate}
            />
          );
        })}
      </ul>
    );
  }
}

TodosList.defaultProps = {
  todos: [],
  handleChangeProps: () => { },
  deleteTodoProps: () => { },
  setUpdate: () => { },
};

TodosList.propTypes = {
  todos: PropTypes.array,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
