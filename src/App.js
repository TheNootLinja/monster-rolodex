import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: Math.random(),
        },
        {
          name: 'Dracula',
          id: Math.random(),
        },
        {
          name: 'Zombie',
          id: Math.random(),
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
          <h1 key={monster.id}>{ monster.name }</h1>
          ))}
      </div>
    )
  }
}

export default App;
