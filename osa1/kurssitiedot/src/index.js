import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => <h1>{props.course}</h1>;

const Content = props =>
  props.content.map(course => (
    <p key={course.name}>
      {course.name} {course.exercise}
    </p>
  ));

const Total = props => {
  const sum = props.content.reduce((acc, course) => {
    return acc + course.exercise;
  }, 0);

  return <p>yhteensä {sum} tehtävää</p>;
};

const App = () => {
  const course = 'Half Stack -sovelluskehitys';
  const content = [
    {
      name: 'Reactin perusteet',
      exercise: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercise: 7
    },
    {
      name: 'Komponenttien tila',
      exercise: 14
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
