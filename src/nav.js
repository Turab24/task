import React from'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
  return (
      <nav>
          <h3 className="logo">logo</h3>
          <ul className="nav-links">
              <Link to= '/home'>
              <li>HOME</li>
              </Link>
              <Link to= '/shop'>
                 <li>shop</li>
                 </Link>
          </ul>
      </nav>
    
    );
}

export default Nav;
