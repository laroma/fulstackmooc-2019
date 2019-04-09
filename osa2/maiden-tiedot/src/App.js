import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/Input';
import CountryResult from './components/CountryResult';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [forecastCity, setForecastCity] = useState('');
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const apiKeyHandler = event => setApiKey(event.target.value);
  const searchHandler = event => filterCountries(event.target.value);

  const filterCountries = countryName => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );

    setSearch(countryName);
    setSearchResults(filtered);

    if (filtered.length === 1) {
      setForecastCity(filtered[0].capital);
      getForecast();
    }
  };

  const getForecast = () =>
    axios
      .get(
        `https://api.apixu.com/v1/current.json?key=${apiKey}&q=${forecastCity}`
      )
      .then(response => setForecast(response.data))
      .catch(err => {
        console.log(err);
      });

  return (
    <div>
      <div>
        <div>
          <Input label="apixu API key" value={apiKey} handler={apiKeyHandler} />
        </div>
        <div>
          <Input
            label="find countries"
            value={search}
            handler={searchHandler}
          />
        </div>
      </div>
      <CountryResult
        result={search ? searchResults : []}
        forecast={forecast}
        showCountryFn={filterCountries}
      />
      {apiKey === '' ? <p>Fill your apixu API key!</p> : null}
    </div>
  );
};

export default App;
