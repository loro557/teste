import React from 'react'
import './style.css'
import { Link } from 'gatsby'

const Header = () => {
	return (

        <div className='bg-info my-3 py-3'>

  <nav className="container navbar navbar-expand navbar-dark">
  <Link className="navbar-brand d-none d-sm-block" to='/'>Navbar</Link>
  
  
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>INICIO</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/home'>HOME</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/contato'>CONTATO</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/servicos'>SERVIÇOS</Link>
      </li>
    </ul>
  
</nav>
          
        </div>

	)
}

export default Header