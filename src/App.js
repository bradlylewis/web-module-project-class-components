import React, { useState } from 'react';

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
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
      </div>
    );
  }
}

export default App;
