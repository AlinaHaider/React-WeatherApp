import './App.css';
import React, {useState} from 'react';
import { Search } from './Components/SearchBox/Search';
import { Weather } from './Components/Text/Weather';


function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.keyCode === 13) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&appid=0bdd9152c84cf4bee29bff7df30a9c22`)
        .then((res) => res.json())
        .then((res) => {
          setWeather(res);
          console.log(res, "hello")
          setQuery("");
        });
    }
  }

// {temp={Math.round((weather.main.temp-32)*5/9)}}
  return (
      <div className="app">
        <main className="main">
          <Search onChange={(e) => setQuery(e.target.value)} value={query} onKeyPress={search} />
          {(typeof weather.main != "undefined") ? (
            <div>
              <Weather location={weather.name} country={weather.sys.country} temp={Math.round(weather.main.temp)} weather={weather.weather[0].main}/>
            </div>
          ): ("")}
        </main>
    </div>
    
  );
}

export default App;
