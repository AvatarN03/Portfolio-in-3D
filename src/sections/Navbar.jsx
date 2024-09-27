import React, { useState } from 'react'
import { navLinks } from '../constants/constants';

function Navbar() {

  const [isOpen, setOpen] = useState(false);

  const toogleMenu = () => setOpen(prev => !prev);

  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {
          navLinks.map(item => (
            <li key={item.id} className='nav-li'>
              <a href={item.href} className='nav-li_a' onClick={() => { }}>{item.name}</a>
            </li>
          ))
        }

      </ul>
    )
  }
  return (
    <header className='text-white bg-black/90 fixed top-0 left-0 right-0 z-50'>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className='text-neutral-400 font-bold hover:text-white text-4xl transition-colors'>Prashant<span className='text-white drop-shadow-md '>h</span></a>

          <button onClick={toogleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='ToggleMenu'>
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toogle" className='w-6 h-6 ' />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>

      </div>
      <div className={`nav-sidebar ${isOpen? 'max-h-screen' :'max-h-0'}`}>
        <nav className='p-4'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar