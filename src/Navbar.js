import './Navbar.css'
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-slate-800 z-10">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl"><h3>Pokedex</h3></a>
        </div>
        <div className="flex-none">
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <h2><li><a>About</a></li></h2>
                <h2><li><a>Contact</a></li></h2>
            </ul>
        </div>
        </div>
        </div>
  );
};

export default Navbar;
