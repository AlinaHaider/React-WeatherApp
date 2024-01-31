import React from 'react'
import './SearchStyle.css'

export const Search = (inputProps) => {
  return (
    <div>
      <input className='search' placeholder='Search...' type='text' onKeyUp={inputProps.onKeyPress}></input>
    </div>
  )
}
