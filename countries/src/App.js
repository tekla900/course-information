import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log(response.data);
        setCountries(response.data)
      });
  }, []);

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  };

  const countriesToShow = countries.filter(each => {
    if (each.name.common.toLowerCase().includes(newSearch.toLowerCase())) {
      return each;
    }
  });

  if (countriesToShow.length > 10) {
    console.log('app works 1');
    return (
    <div>
      <span>find countries: </span>
      <input value={newSearch} onChange={handleSearch} />
      <p>Too many matches, specify another filter</p>
    </div>
    )
  } else if (countriesToShow.length < 10 && countriesToShow.length > 1) {
    console.log('app works 2');
    return (
      <div>
        <span>find countries: </span>
        <input value={newSearch} onChange={handleSearch} />
        <ul>
          {countriesToShow.map(each => {
            return (
              <li key={each.name.common}>{each.name.common} </li>
            )
          })}
        </ul>
      </div>
    )
  } else if (countriesToShow.length === 1) {
    const languageArr = Object.values(countriesToShow[0].languages);
    const capitalArr = Object.values(countriesToShow[0].capital);
    console.log('app works 3');
    console.log(languageArr);
    return (
      <div>
          <span>find countries: </span>
          <input value={newSearch} onChange={handleSearch} />
          <h2>{countriesToShow[0].name.common}</h2>
          <p>Capital: {capitalArr.map(each => <span>{each}</span>)}</p>
          {/* <p>Capital: {countriesToShow[0].capital}</p> */}
          <p>Area: {countriesToShow[0].area}</p>

          <h4>languages: </h4>
          <ul>
            {
              languageArr.map(each => {
                return (
                  <li key={each}>{each}</li>
                )
              })
            }
          </ul>
        <img src={countriesToShow[0].flags.svg} />
      </div>
    )
  }

  
}

export default App;
