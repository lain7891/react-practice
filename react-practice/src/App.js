import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';



const App = props => {

  const [personsState, setPersonState] = useState({
    persons: [
            { name: "Estefania", age:  33 },
            { name: "Vanessa", age: 31 },
            { name: "Maurizio", age:  27 }
          ],
          otherState: 'some other value"'
  });

  const [otherState, setOtherState] = useState('Some other value')

  console.log(personsState, otherState)

  const  switchNameHandler = () => {
    //     // console.log("Was clicked");
    //   //   this.state.persons[0].name = "Stef";
      setPersonState(({persons: [
        { name: "Stef", age:  33 },
        { name: "Vane", age: 31 },
        { name: "Mau", age:  27 }
      ]
      // otherState: personsState.otherState
    }));};

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
        name= {personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler}>My Hobbies: Baking</Person>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I/m a React App')

    };

export default App;