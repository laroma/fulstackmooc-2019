import React from 'react';

const Country = props => {
  const { name, capital, population, languages, flag } = props.country;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        <b>capital:</b> {capital}
      </p>
      <p>
        <b>population:</b> {population}
      </p>
      <h3>Languages</h3>
      <ul>
        {languages.map(language => (
          <li key={language.iso639_2}>{language.name}</li>
        ))}
      </ul>
      <div>
        <img src={flag} alt={name} width="100" />
      </div>
    </div>
  );
};

export default Country;
