import React from 'react'
import { Outlet, NavLink } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export const MyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `hover:text-red-500 transition-colors ${isActive ? "text-red-500" : "text-gray-300"} `

  return (
    <div>
      <header className='bg-gray-950 p-4'>
        <nav className='px-6 max-w-7xl mx-auto'>
          {/*felső sor */}
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold '>
              Movie<span className='text-red-500'>Movie</span>
            </div>
            {/* asztali menü */}
            <div className='hidden min-[580px]:flex gap-8'>
              <NavLink className={navLinkClass} to="/">Kezdőlap</NavLink>
              <NavLink className={navLinkClass} to="/movies">Filmek</NavLink>
              <NavLink className={navLinkClass} to="/tv">Sorozatok</NavLink>
              <NavLink className={navLinkClass} to="/search">Keresés</NavLink>
            </div>
            {/*hamburger menu */}
            <button onClick={() => setMenuOpen(!menuOpen)} className='min-[581px]:hidden text-3xl'>
              {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </button>
          </div>
          {/*mobil menü sor */}
          {menuOpen && (
            <div className='flex flex-col gap-4 hidden min-[581px]'>
              <NavLink className={navLinkClass} to="/">Kezdőlap</NavLink>
              <NavLink className={navLinkClass} to="/movies">Filmek</NavLink>
              <NavLink className={navLinkClass} to="/tv">Sorozatok</NavLink>
              <NavLink className={navLinkClass} to="/search">Keresés</NavLink>
              </div>
          )
          }
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
