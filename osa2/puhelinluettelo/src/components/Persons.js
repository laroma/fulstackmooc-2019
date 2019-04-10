import React from 'react';

const Persons = ({ persons, deleteHandler }) =>
  persons.map(person => (
    <p key={person.id}>
      {person.name} {person.number}{' '}
      <button onClick={() => deleteHandler(person)}>poista</button>
    </p>
  ));

export default Persons;
