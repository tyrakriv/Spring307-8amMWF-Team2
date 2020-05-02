import React, {Component} from 'react';
import Todos from  './components/Todos'
import './App.css';

class App extends Component{

  state = {
    todos: [
      {
        id: 1,
        title: 'Record Mood',
        completed: false
      },
      {
        id: 2,
        title: 'Journal',
        completed: false
      },
      {
        id: 3,
        title: 'Take a Walk',
        completed: false
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
