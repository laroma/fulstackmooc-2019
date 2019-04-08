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

const Statistic = ({ text, value, unit }) => (
  <p>
    {text} {value} {unit}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const avg = (good - bad) / sum || 0;
  const goodines = (good / sum) * 100 || 0;

  if (sum === 0) {
    return <p>Ei yhtään palautetta annettu</p>;
  }
  return (
    <div>
      <h1>Statistiikka</h1>
      <Statistic text="hyvä" value={good} />
      <Statistic text="neutraali" value={neutral} />
      <Statistic text="huono" value={bad} />
      <Statistic text="yhteensä" value={sum} />
      <Statistic text="keskiarvo" value={avg} />
      <Statistic text="positiivisia" value={goodines} unit="%" />
    </div>
  );
};

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
