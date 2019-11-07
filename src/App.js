import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// import Radium, { StyleRoot } from "radium";

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
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: 'Manu', age: 29},
  //       {name: 'Stephanie', age: 27},
  //     ]
  //   });
  // }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
      //Utilizando la libreria radium
      // ":hover": {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'max')}
            changed={this.nameChangedHandler}>
              My hobbies: Racing
          </Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );

      style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hola a todos</h1>
        <p className={classes.join(" ")}>kjasjkdkajsjdaskjdsa</p>
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Toggle persons
        </button>
        {persons}
        {/* { this.state.showPersons === true ?
        <div>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
        
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'max')}
        changed={this.nameChangedHandler}>
        My hobbies: Racing
        </Person>
        
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
        </div> : null
      } */}
      </div>
    );
  }
}

export default App;
