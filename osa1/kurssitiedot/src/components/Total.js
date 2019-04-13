import React from 'react';

const Total = props => {
  const sum = props.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <p>yhteensä {sum} tehtävää</p>;
};

export default Total;
