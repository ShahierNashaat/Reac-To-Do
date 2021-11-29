/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    addTodoProps(title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
      </form>
    );
  }
}

InputTodo.defaultProps = {
  addTodoProps: () => {},
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

export default InputTodo;
