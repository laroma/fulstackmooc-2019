import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Filter value={search} handler={searchChangeHandler} />
      <h2>lisää uusi</h2>
      <PersonForm
        submitHandler={addName}
        name={newName}
        nameChangeHandler={nameChangeHandler}
        number={newNumber}
        numberChangeHandler={numberChangeHandler}
      />
      <h2>Numerot</h2>
      <Persons persons={search !== '' ? searchResults : persons} />
    </div>
  );
};

export default App;
