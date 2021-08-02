import React from "react";
import Todo from "./Todo";

const TodoList = props => {

    // Clear completed items when clicked
    const handleClick = ()=> {
        props.handleClear();
  }


  return (
    <div className="activities-list">
      {props.activities.map(item => (
        <Todo handleCompleted={props.handleCompleted} key={item.id} item={item} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;