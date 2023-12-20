import './App.css';
import {useState} from 'react';
import Person from './Person/Person';

interface Person {
  name: string;
  age: number;
  hobby?: string;
}


function App() {
  const [people, setPeople] = useState<Person[]>([
    {name: 'Jane', age: 28, hobby: 'Video games!'},
    {name: 'John', age: 38, hobby: 'ski!'}
  ]);

  const changeName = () => {
    setPeople([
      {name: 'Jane Doe', age: 28},
      {name: 'John Doe', age: 38}
    ]);
  };

  return (
    <div className="App">
      <Person
        name={people[0].name}
        age={people[0].age}
      >
        <strong>{people[0].hobby}</strong>
      </Person>
      <Person
        name={people[1].name}
        age={people[1].age}
      >
        <strong>{people[1].hobby}</strong>
      </Person>
      <div>
        <button onClick={changeName}>Change name</button>
      </div>
    </div>
  );
}

export default App;
