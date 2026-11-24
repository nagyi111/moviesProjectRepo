import React from 'react'

export const Filter = ({type, setType}) => {
  return (
    <div className='flex justify-center gap-4 p-4'>
    <label>
        <input type="radio" value="movie" className='radio radio-warning' checked={type=='movie'}
        onChange={(e)=> setType(e.target.value)}></input>
        &nbsp;Movies
    </label>
    <label>
        <input type="radio" value="tv" className='radio radio-warning' checked={type=='tv'}
        onChange={(e)=>setType(e.target.value)}></input>
        &nbsp;TV Shows
    </label>
    </div>
  )
}
