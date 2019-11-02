import React, {Component} from 'react';
import './App.css';
import Person from './Person/person';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hola a todos</h1>
//       <p>kjasjkdkajsjdaskjdsa</p>
//       <button>Switch name</button>
//       <Person name='Max' age='28' />
//       <Person name='Manu' age='29'>My hobbies: Racing</Person>
//       <Person name='Stephanie' age='26' />
//     </div>
//   );
// }

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hola a todos</h1>
        <p>kjasjkdkajsjdaskjdsa</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
