import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarHome() {
  const navigate = useNavigate();

 const handleLogout = () => {
  localStorage.clear();
  navigate("/login");
 }
  return (
    <header id='navbarHome'>
    <nav className="navbar navbar-expand-lg bg-transparent d-flex my-5">
      <div className="container-fluid">
        <div
          className="bgc "
          style={{
            backgroundColor: "#EFC81A",
            width: "25%",
            height: "183vh",
            position: "absolute",
            right: 0,
            zIndex: -1
          }}
        ></div>
        <div className=" container d-flex flex-row ml-">
          <button
            className=" navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav nav-link"
                aria-current="page"
                to="/" style={{marginLeft:"-5em" ,marginRight: "5em" }}
              >
                Home
              </Link>
              <Link className="nav nav-link" to="/addRecipe" style={{ marginRight: "5em" }}>
                Add recipes
              </Link>
              <Link className="nav nav-link" to="/Profile" >
                Profile
              </Link>
            </div>
            
            <div className="logout">
              <Link className="nav-link" to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={52}
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <circle cx={26} cy={26} r={26} fill="white" />
                  <path
                    d="M36.6066 27.2699C34.9729 25.9558 33.0283 24.983 30.9066 24.3941C33.179 23.1352 34.6719 21.0283 34.6719 18.646C34.6719 14.7998 30.7817 11.6707 26 11.6707C21.2183 11.6707 17.3281 14.7998 17.3281 18.646C17.3281 21.0283 18.821 23.1352 21.0935 24.3941C18.9718 24.983 17.0272 25.9558 15.3934 27.2699C12.5603 29.5488 11 32.5787 11 35.8015H13.3438C13.3438 30.1881 19.0213 25.6213 26 25.6213C32.9787 25.6213 38.6562 30.1881 38.6562 35.8015H41C41 32.5787 39.4397 29.5488 36.6066 27.2699ZM26 23.7361C22.5107 23.7361 19.6719 21.4527 19.6719 18.646C19.6719 15.8393 22.5107 13.5559 26 13.5559C29.4893 13.5559 32.3281 15.8393 32.3281 18.646C32.3281 21.4527 29.4893 23.7361 26 23.7361Z"
                    fill="#2E266F"
                  />
                  <circle cx="43.5" cy="7.5" r="7.5" />
                </svg>
                <button onClick={handleLogout} className='btn btn-dark' style={{ marginLeft: "0.5em" }}>Logout</button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
    
  </header>
  )
}

export default NavbarHome