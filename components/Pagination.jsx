import React from 'react'

export const Pagination = ({page, setPage}) => {
  const numbers = [...Array(10)].map((_, i) => i + 1)
  return (

    <div className='flex justify-center p-4'>
      <div className="join">
        {numbers.map(nr =>
          <button key={nr} 
          className={`join-item btn ${page==nr ? "btn-active" : ""}`}
          onClick={()=>setPage(nr)}
          >
          {nr}
          </button>
        )}
        
      </div>
    </div>
  )
}