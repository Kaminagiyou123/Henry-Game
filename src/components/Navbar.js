import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../Context";
import "../ css/Navbar.css";
const Navbar = () => {
  const { setNewGame } = useProductsContext();
  return (
    <div className='navigation-bar'>
      <ul className='nav'>
        <li>
          <Link to='/history' className='navlink'>
            History
          </Link>
        </li>
        <li>
          <Link to='/game' className='navlink' onClick={setNewGame}>
            Play Game
          </Link>
        </li>
        <li>
          <Link to='/record' className='navlink'>
            Record
          </Link>
        </li>
        <li>
          <Link to='/about' className='navlink nav-right'>
            About
          </Link>
        </li>
      </ul>
      <Link to='/' exact>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Tudor_Rose.svg'
          alt='tudor rose'
          className='logo rotate'
        />
      </Link>
    </div>
  );
};

export default Navbar;
