import React from 'react';
import Country from './Country';
import Forecast from './Forecast';

const CountryResult = props => {
  const { result, forecast, showCountryFn } = props;

  if (result.length === 0) {
    return <></>;
  }
  if (result.length === 1) {
    const country = { ...result[0] };
    return (
      <div>
        <Country country={country} />
        <Forecast forecast={forecast} />
      </div>
    );
  } else if (result.length > 0 && result.length <= 10) {
    return result.map(result => (
      <p key={result.alpha3Code}>
        {result.name}{' '}
        <button onClick={() => showCountryFn(result.name)}>show</button>
      </p>
    ));
  } else if (result.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return <div />;
};

export default CountryResult;
