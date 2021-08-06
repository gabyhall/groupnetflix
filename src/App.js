import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Landing } from './pages/landing';
import { Home } from './pages/home'
import { Profile } from './pages/profile'
import "./components/navbar"

const App = () => {
  const [user, setUser] = useState();

  return (
    <Router>
    <div className="Nav"> 
           {user ? <Redirect to='/home'/> : <Redirect to ='/'/>}
  <nav class="navbar">
    <div className ="Logo">
        {/* <img src={logo} alt="nflogo" /> */}
    </div> {/* Logo */}
    <div class="containerNav">
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
    </div>{/* Container */}
  </nav> {/* navbar */}

<div>
<Switch>
  <Route path="/Movies">
    <div className="moviesPage">
      <Home user = {user}></Home>
    </div>
  </Route>
  <Route path="/MyWatchList">
    <div className="myWatchListPage">
    </div>
  </Route>
  <Route path="/Profile">
    <div className = "profilePage">
        <Profile></Profile>
    </div>
  </Route>
  <Route path="/">
    <div className = "homePage">
      <Landing></Landing>
    </div>
  </Route>
</Switch>
</div>
</div>
</Router>
  );
  }

const AppContainer = styled(Router)`
  width: 100vh;
  height: 100vh;`

export default App;