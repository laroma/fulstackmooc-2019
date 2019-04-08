import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const Feedback = ({
  good,
  clickGood,
  neutral,
  clickNeutral,
  bad,
  clickBad
}) => (
  <div>
    <h1>Anna palautetta</h1>
    <Button clickHandler={() => clickGood(good + 1)} text="hyvä" />
    <Button clickHandler={() => clickNeutral(neutral + 1)} text="neutraali" />
    <Button clickHandler={() => clickBad(bad + 1)} text="huono" />
  </div>
);

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <h1>Statistiikka</h1>
    <p>hyvä {good}</p>
    <p>neutraali {neutral}</p>
    <p>hyvä {bad}</p>
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        good={good}
        clickGood={setGood}
        neutral={neutral}
        clickNeutral={setNeutral}
        bad={bad}
        clickBad={setBad}
      />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
