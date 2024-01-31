import './App.css';
import React, {useState} from 'react';
import { Search } from './Components/SearchBox/Search';
import { Weather } from './Components/Text/Weather';


// const api = {
//   key: "0bdd9152c84cf4bee29bff7df30a9c22",
//   base: `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=`
// }

function App() {

  const {query, setQuery} = useState("");
  const {weather, setWeather} = useState({});

  const search = event =>{
    console.log(event.keyCode)
    if (event.keyCode === 13) {
      // fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&appid=${api.key}`)
      fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&appid=0bdd9152c84cf4bee29bff7df30a9c22`)
        .then(res => res.json())
        .then(res => {
          setWeather(res);
          setQuery("");
          console.log(setQuery ,"sjkdgvsudv")
        });
    }
    
  }

  return (
    <div className="app">
      <main className='main'>
        <Search onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}  />
        {/* <input className='search' placeholder='Search...' type='text' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}></input> */}
        <Weather/>
      </main>
    </div>
  );
}

export default App;
