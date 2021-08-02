import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      inputValue:""
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      inputValue:e.target.value
    })
    // update state with each keystroke
  };

  // class property to submit form
  handleClick = (e)=> {
    e.preventDefault();
    this.props.handleAddItem(this.state.inputValue);
  }

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges}type="text" name="item" />
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default ListForm;