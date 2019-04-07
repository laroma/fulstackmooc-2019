import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('Hello hello');
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
