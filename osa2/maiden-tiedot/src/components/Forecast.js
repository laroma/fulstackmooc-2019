import React from 'react';

const Forecast = props => {
  const { location, current } = props.forecast;

  if (!location || !current) {
    return <div>No weather data available :(</div>;
  }

  const { name } = location;
  const { temp_c, condition, wind_kph, wind_dir } = current;

  return (
    <>
      <h3>Weather in {name}</h3>
      <p>
        <b>temperature:</b> {temp_c} Celsius
      </p>
      <p>
        <img src={condition.icon} alt={condition.text} />
      </p>
      <p>
        <b>wind:</b> {wind_kph} kph direction {wind_dir}
      </p>
    </>
  );
};

export default Forecast;
