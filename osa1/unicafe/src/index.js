import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Badge } from 'reactstrap';

const Btn = ({ clickHandler, text, color }) => (
  <Button onClick={clickHandler} color={color || 'primary'}>
    {text}
  </Button>
);

const Feedback = ({
  good,
  clickGood,
  neutral,
  clickNeutral,
  bad,
  clickBad
}) => (
  <Container>
    <Row>
      <Col>
        <h1>Anna palautetta</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Btn
          clickHandler={() => clickGood(good + 1)}
          text="hyvä"
          color="success"
        />
      </Col>
      <Col>
        <Btn
          clickHandler={() => clickNeutral(neutral + 1)}
          text="neutraali"
          color="warning"
        />
      </Col>
      <Col>
        <Btn
          clickHandler={() => clickBad(bad + 1)}
          text="huono"
          color="danger"
        />
      </Col>
    </Row>
  </Container>
);

const Statistic = ({ text, value, color, unit }) => (
  <Row>
    <Col>{text}</Col>
    <Col>
      <Badge color={color || 'primary'}>
        {value} {unit}
      </Badge>
    </Col>
  </Row>
);

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const avg = (good - bad) / sum || 0;
  const goodines = (good / sum) * 100 || 0;

  return (
    <Container>
      <Row>
        <Col>
          <h2>Statistiikka</h2>
        </Col>
      </Row>
      {sum === 0 ? (
        <Row>
          <Col>Ei yhtään palautetta annettu</Col>
        </Row>
      ) : (
        <>
          <Statistic text="hyvä" value={good} color="success" />
          <Statistic text="neutraali" value={neutral} color="warning" />
          <Statistic text="huono" value={bad} color="danger" />
          <Statistic text="yhteensä" value={sum} />
          <Statistic text="keskiarvo" value={avg} />
          <Statistic
            text="positiivisia"
            value={goodines}
            color="success"
            unit="%"
          />
        </>
      )}
    </Container>
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
