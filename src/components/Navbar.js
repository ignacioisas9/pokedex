import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Navbar.css';
import fireAlert from "../functions/Alert"

const Navbar = () => {
  const [user,setUser] = useState("");

  useEffect(() => {
    function checkUser() {
      const item = localStorage.getItem('user')
      if (item) {
        setUser(item)
      }
    }
    window.addEventListener('storage', checkUser())
    return () => {
      window.removeEventListener('storage', checkUser())
    }
  }, [])
  return (
    <header>
      <div className="navbar bg-slate-600">
        <div className="navbar-start text-secondary-color">
          <div className="dropdown">
            <label tabIndex="0" className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52"
            >
              <li className="">
                <NavLink
                  className="bg-opacity-0 bg-slate-600"
                  to="/list"
                >
                  List of Favourites
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" state={{ page: "1" }}>
            <div className="flex flex-row items-center">
              <span className="flex items-center gap-2 text-3xl">
                <img className='w-10 block m-auto' src={require("../assets/pokebola.png")} alt='pokebola'/>
                Pokedex
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0 mx-3 items-center flex">
            <li>
              <NavLink
                className="m-2 bg-opacity-0 hover:bg-slate-500 bg-slate-600 text-xl"
                to="/list"
              >
                List of Favourites
              </NavLink>
            </li>
            <li>
              <select name="select" value={user} className="m-2 w-40 select select-bordered hover:bg-slate-500 bg-slate-600 text-xl" onChange={(event) => fireAlert(event)}>
                <option value="Ignacio">Ignacio</option>
                <option value="Federico">Federico</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
