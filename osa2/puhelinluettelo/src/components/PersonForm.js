import React from 'react';

const PersonForm = ({
  submitHandler,
  name,
  nameChangeHandler,
  number,
  numberChangeHandler
}) => (
  <form onSubmit={submitHandler}>
    <div>
      nimi: <input value={name} onChange={nameChangeHandler} />
    </div>
    <div>
      numero: <input value={number} onChange={numberChangeHandler} />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
);

export default PersonForm;
