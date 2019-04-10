import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    personService.getAll().then(allPersons => setPersons(allPersons));
  }, []);

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
    const newPerson = { name: newName, number: newNumber };

    if (existing) {
      alert(`${newName} on jo luettelossa`);
      return;
    }

    personService.create(newPerson).then(createdPerson => {
      setPersons(persons.concat(createdPerson));
      setNewName('');
      setNewNumber('');
    });
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
