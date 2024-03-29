import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 800 ? true : false)
  const toggleNavbar = () => {
    if (window.innerWidth < 800) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  return (
    <nav>
      <div className='container nav__container'>
        <Link to='/' className='nav__logo' onClick={toggleNavbar}>
          <img src={Logo} alt='Navbar Logo' />
        </Link>
        {isOpen && (
          <ul className='nav__menu'>
            <li>
              <Link to='/profile/:id' onClick={toggleNavbar}>
                Kalu John
              </Link>
            </li>
            <li>
              <Link to='/create' onClick={toggleNavbar}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to='/authors' onClick={toggleNavbar}>
                Authors
              </Link>
            </li>
            <li>
              <Link to='/logout' onClick={toggleNavbar}>
                Logout
              </Link>
            </li>
          </ul>
        )}

        <button className='nav__toggle-btn' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Header
