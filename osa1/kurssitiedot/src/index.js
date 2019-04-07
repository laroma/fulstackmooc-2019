import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => <h1>{props.name}</h1>;

const Part = props => (
  <p>
    {props.name} {props.exercises}
  </p>
);

const Content = props =>
  props.parts.map(part => (
    <Part key={part.name} name={part.name} exercises={part.exercises} />
  ));

const Total = props => {
  const sum = props.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <p>yhteensä {sum} tehtävää</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
