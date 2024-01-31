import React from 'react'
import './WeatherStyle.css'

const date = () => {
  let date = String(new window.Date())
  date = date.slice(0,15) // slics (3,15) to remove day
  return date
}
export const Weather = (weatherProps) => {

  return (
    <div className='weather'>
      <p></p>
      <h1>Location</h1>
      <h2>{date()}</h2>
      <div className='temp'>
        <h3>29</h3>
      </div>
      <h3>weather</h3>
    </div>
  )
}
