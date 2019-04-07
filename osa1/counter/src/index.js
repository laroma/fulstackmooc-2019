import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = props => {
  const [counter, setCounter] = useState(0);

  //const increaseByOne = () => setCounter(counter + 1);
  //const setToZero = () => setCounter(0);
  //const decreaseByOne = () => setCounter(counter - 1);
  const setToValue = value => () => setCounter(value);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={setToValue(counter + 1)} text="plus" />
      <Button handleClick={setToValue(0)} text="zero" />
      <Button handleClick={setToValue(counter - 1)} text="minus" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
