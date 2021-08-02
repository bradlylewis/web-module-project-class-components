import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      inputValue:""
    }
  }

  handleChanges = event => {
    this.setState({
      ...this.state,
      inputValue:event.target.value
    })
    // update state with each keystroke
  };

  // class property to submit form
  handleClick = (event)=> {
    event.preventDefault();
    this.props.handleAddItem(this.state.inputValue);
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChanges}type="text" name="item" />
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default TodoForm;