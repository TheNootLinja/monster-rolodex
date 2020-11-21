import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/SearchBox.component'

import './App.css';

// https://jsonplaceholder.typicode.com/users

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
  }

  // It is important to remember that when we use an arrow function
  // as we are below, we are automatically binding "this" to the
  // correct contect automatically.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <SearchBox 
        placeholder = 'Search Monsters'
        handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
}

export default App;
