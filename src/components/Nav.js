import React from 'react'
import "./Nav.css"
import logo from '../images/nflogo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Nav() {
    return ( <div className="Nav"><img src={logo} alt="nflogo" />
<div className="login">  
        <button>Log in</button> 
        <button>Sign Up </button> Movies Watch List
        <ul class="navbar-right">
                <li class="menuItem">
                <Link class="menuItem" to="/" >Home</Link>
                </li>
                <li class="menuItem">
                <Link class="menuItem" to="/Movies" >Movies</Link>
                </li>
                <li class="menuItem">
                <Link class="menuItem" to="/MyWatchList">My Watch List</Link>
                </li>
                <li class="menuItem">
                <Link class="menuItem" to="/Profile">Profile</Link>
                </li>
              </ul>


        <Switch>
  <Route path="/Movies">
    <div className="moviesPage">
    </div>
  </Route>
  <Route path="/MyWatchList">
    <div className="myWatchListPage">
    </div>
  </Route>
  <Route path="/Profile">
    <div className = "profilePage">
    </div>
  </Route>
  <Route path="/">
    <div className = "homePage">
    </div>
  </Route>
</Switch>
        
        
        
        </div> 

    </div>
        

    )
};

export default Nav