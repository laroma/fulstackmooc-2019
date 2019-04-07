import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => <h1>{props.course}</h1>;

const Part = props => (
  <p>
    {props.name} {props.exercise}
  </p>
);

const Content = props =>
  props.content.map(course => (
    <Part key={course.name} name={course.name} exercises={course.exercises} />
  ));

const Total = props => {
  const sum = props.content.reduce((acc, course) => {
    return acc + course.exercises;
  }, 0);

  return <p>yhteensä {sum} tehtävää</p>;
};

const App = () => {
  const course = 'Half Stack -sovelluskehitys';
  const content = [
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
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
