import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello, {name}! You are {age} years old.
      </p>
      <p>So you we probably born {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = 'Yoda';
  const age = 400;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Obi-Wan" age={22 + 25} />
      <Hello name={name} age={age} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
