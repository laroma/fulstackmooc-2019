import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const nameChangeHandler = event => setNewName(event.target.value);
  const numberChangeHandler = event => setNewNumber(event.target.value);
  const searchChangeHandler = event => {
    setSearch(event.target.value);
    setSearchResults(
      persons.filter(person =>
        person.name.toLowerCase().startsWith(event.target.value.toLowerCase())
      )
    );
  };

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

  const personList = list =>
    list.map(person => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ));

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      rajaa näytettäviä: <input value={search} onChange={searchChangeHandler} />
      <h2>lisää uusi</h2>
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
      {personList(searchResults.length > 0 ? searchResults : persons)}
    </div>
  );
};

export default App;
