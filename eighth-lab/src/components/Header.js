import React from 'react';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><a href="/detenidos">Detenidos</a></li>
          <li><a href="/report">Report</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
