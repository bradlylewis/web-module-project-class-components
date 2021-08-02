import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const activities = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activities: activities
    }
  }

  handleCompleted = (id) => {
    this.setState({
      activities: this.state.activities.map(item => {
        if (item.id === id) {
          return({
            ...item,
            completed: !item.completed
          });
        }
        return item;
      })
    });
  }

  handleAddItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      activities: [...this.state.activities, newItem]
    });
    
  }

  handleClear = () => {
    //filter through activities
    //remove all activities where completed === true
    //set state to THAT list
    this.setState({
      ...this.state,
      activities: this.state.activities.filter(item=>{
        return(item.completed === false);
      })
    });
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List: MVP</h1>
          <TodoForm handleAddItem={this.handleAddItem}/>
        </div>
      <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} activities={this.state.activities}/>
      </div>
    );
  }
}

export default App;
