import React from 'react';
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav className='headers'>
        <ul className='list'>
          <li className='list-element'><a href="/detenidos">Registrar</a></li>
          <li className='list-element'><a href="/report">Report</a></li>
          <li className='list-element'><a href="/list">List</a></li>
          <li className='list-element'><a href="/intec">Intec inscr</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
