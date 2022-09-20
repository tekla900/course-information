import { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({ city, api_key }) => {
  const [newTemp, setNewTemp] = useState('');
  const [newWInd, setNewWind] = useState('');
  const [newImg, setnewImg] = useState('');

  {
    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        .then(response => {
          setNewTemp(response.data.main.temp);
          setnewImg(response.data.weather[0].icon);
          setNewWind(response.data.wind.speed);          
        });
    }, [])
  
}
return (
  <div>
    <h2>Weather in {city}</h2>
    <p>temperature: {newTemp} Celsius</p>
    <img src={`http://openweathermap.org/img/wn/${newImg}@2x.png`} />`
    <p>wind: {newWInd} 1.34 m/s</p>
  </div>
)
}

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      });
  }, []);



  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  };

  const handleShow = (event) => {
    const currentCountry = event.target.value;
    setCountries(countries.filter(each => {
      if (each.name.common.toLowerCase().includes(currentCountry.toLowerCase())) {
        return each;
      }
    }))
  }

  const countriesToShow = countries.filter(each => {
    if (each.name.common.toLowerCase().includes(newSearch.toLowerCase())) {
      return each;
    }
  });

  if (countriesToShow.length > 10) {
    return (
    <div>
      <span>find countries: </span>
      <input value={newSearch} onChange={handleSearch} />
      <p>Too many matches, specify another filter</p>
    </div>
    )
  } else if (countriesToShow.length < 10 && countriesToShow.length > 1) {
    return (
      <div>
        <span>find countries: </span>
        <input value={newSearch} onChange={handleSearch} />
        <ul>
          {countriesToShow.map(each => {
            return (
              <li key={each.name.common}>
                {each.name.common} 
                <button onClick={handleShow} value={each.name.common}>
                  show
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  } else if (countriesToShow.length === 1) {
    const languageArr = Object.values(countriesToShow[0].languages);
    const capitalArr = Object.values(countriesToShow[0].capital);
    return (
      <div>
          <span>find countries: </span>
          <input value={newSearch} onChange={handleSearch} />
          <h2>{countriesToShow[0].name.common}</h2>
          <p>Capital: {capitalArr.map(each => <span key={each}>{each}</span>)}</p>
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
        <Weather city={capitalArr[0]} api_key={api_key} />
       
      </div>
    )
  }

  return (
    <div>
      <span>find countries: </span>
      <input value={newSearch} onChange={handleSearch} />
    </div>
  )
}

export default App;
