import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header id='navbar'>
    <nav className="navbar navbar-expand-lg bg-transparent d-flex my-5">
      <div className="container-fluid">
        <div className="navbir" style={{ marginLeft: "10em" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav nav-link "
                style={{ marginRight: "5em" }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav nav-link"
                style={{ marginRight: "5em" }}
                to="/addRecipe"
              >
                Add recipes
              </Link>
              <Link
                className="nav nav-link"
                to="/profile"
                style={{ textDecorationLine: "underline" }}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar