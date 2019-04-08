import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const nameChangeHandler = event => setNewName(event.target.value);
  const numberChangeHandler = event => setNewNumber(event.target.value);

  const addName = event => {
    event.preventDefault();
    const existing = persons.find(person => person.name === newName);

    if (existing) {
      alert(`${newName} on jo luettelossa`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));

    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addName}>
        <div>
          nimi: <input value={newName} onChange={nameChangeHandler} />
        </div>
        <div>
          numero: <input value={newNumber} onChange={numberChangeHandler} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {persons.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
