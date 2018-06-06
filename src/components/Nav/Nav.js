import React from 'react';
import { Link } from 'react-router-dom';




const Nav = () => (
  <div className="navbar">
    <div>
      <div className="logo">
      <a className="Logo" href="./image/logo.jpg" />
      </div>  
      <ul>
        <li>
          <Link to="/user">
            Home
          </Link>
        </li>
        <li>
          <Link to="/consonants">
            Consonants
          </Link>
        </li>
        <li>
          <Link to="/vowels">
            Vowels
          </Link>
        </li>
        <li>
          <Link to="/vocabulary">
            Vocabulary
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/logout">
            Logout
          </Link>
        </li>


        {/* <li><button className="logOutButton" onClick={this.logout}>Log Out</button></li> */}
      </ul>
    </div>


  </div>
);

export default Nav;
