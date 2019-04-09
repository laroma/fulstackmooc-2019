import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log('response', response.data);
      setCountries(response.data);
    });
  }, []);

  const searchHandler = event => {
    filterCountries(event.target.value);
  };

  const filterCountries = countryName => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );
    setSearch(countryName);
    setSearchResults(filtered);
  };

  return (
    <div>
      <div>
        find countries <input value={search} onChange={searchHandler} />
      </div>
      {searchResults.length === 1 ? (
        searchResults.map(result => (
          <div key={result.alpha3Code}>
            <h2>{result.name}</h2>
            <p>capital {result.capital}</p>
            <p>population {result.population}</p>

            <h3>languages</h3>
            <ul>
              {result.languages.map(language => (
                <li key={language.iso639_2}>{language.name}</li>
              ))}
            </ul>
            <div>
              <img src={result.flag} alt={result.name} width="100" />
            </div>
          </div>
        ))
      ) : searchResults.length <= 10 ? (
        searchResults.map(result => (
          <p key={result.alpha3Code}>
            {result.name}{' '}
            <button onClick={() => filterCountries(result.name)}>show</button>
          </p>
        ))
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
};

export default App;
