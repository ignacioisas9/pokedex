import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../Navbar.css';

function fireAlert(event) {
  localStorage.setItem("user", event.target.value)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Perfil actualizado a: ${event.target.value}`,
    showConfirmButton: false,
    timer: 1500
  })
  setTimeout(() => {window.location.reload()}, 1000)
}

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
      <div className="navbar bg-primary-color">
        <div className="navbar-start text-secondary-color mr-6">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary-color rounded-box w-52"
            >
              <li className="">
                <NavLink
                  className="bg-opacity-0 hover:bg-secondary-color hover:text-primary-color"
                  to="/list"
                >
                  List of Favourites
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" state={{ page: "1" }}>
            <div className="flex flex-row items-center">
              <span className="font-schwifty text-3xl">
                Pokedex
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden mr-7 lg:flex text-white">
          <ul className="menu menu-horizontal p-0 mx-3">
            <li>
              <NavLink
                className="font-mono bg-opacity-0 hover:bg-secondary-color hover:text-primary-color"
                to="/list"
              >
                List of Favourites
              </NavLink>
            </li>
            <li>
              <select name="select" value={user} className="select select-bordered bg-primary-color font-mono w-40" onChange={(event) => fireAlert(event)}>
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
