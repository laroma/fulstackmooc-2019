import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
