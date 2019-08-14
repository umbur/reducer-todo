import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <form>
          <input
            className="input"
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
          />
        </form>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.dispatch({ type: "ADD_TODO", payload: this.state.item });
          }}
        >
          Add Todo
        </button>
        <button className="clear-btn" onClick={this.props.clearTodo}>
          Clear Completed Todo
        </button>
      </>
    );
  }
}

export default TodoForm;
