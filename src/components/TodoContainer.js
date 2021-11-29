/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-body-style */

import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', '[]');
    }

    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')),
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }), () => {
      const { todos } = this.state;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id).map((todo, index) => {
          return { ...todo, id: index + 1 };
        }),
      ],
    }, () => {
      const { todos } = this.state;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  };

  addTodoItem = (newTitle) => {
    const { todos } = this.state;
    const newTodo = { id: todos.length + 1, title: newTitle, completed: false };
    this.setState({
      todos: [...todos, newTodo],
    }, () => {
      const { todos } = this.state;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  };

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    }, () => {
      const { todos } = this.state;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
