import React from 'react';

const Header = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: '20px' }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
