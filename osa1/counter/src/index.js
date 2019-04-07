import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const [counter, setCounter] = useState(0);

  //const increaseByOne = () => setCounter(counter + 1);
  //const setToZero = () => setCounter(0);
  //const decreaseByOne = () => setCounter(counter - 1);
  const setToValue = value => () => setCounter(value);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={setToValue(counter + 1)}>plus</button>
      <button onClick={setToValue(0)}>zero</button>
      <button onClick={setToValue(counter - 1)}>minus</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
