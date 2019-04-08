import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const changeHandler = event => setNewName(event.target.value);

  const addName = event => {
    event.preventDefault();
    const existing = persons.find(person => person.name === newName);

    if (existing) {
      alert(`${newName} on jo luettelossa`);
      return;
    }
    console.log('existing', existing);
    setPersons(persons.concat({ name: newName }));
    setNewName('');
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addName}>
        <div>
          nimi: <input value={newName} onChange={changeHandler} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
