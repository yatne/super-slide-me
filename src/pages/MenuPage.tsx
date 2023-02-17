import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo.png'

const MenuPage = () => {
  return (
    <div className="gameContainer">
      <div className="menu">
        <img src={logo} className="logo" />
        <Link to="/game"><button className="menuButton" style={{fontWeight: 'bold'}}>Play</button></Link>
        <Link to="/baby"><button className="menuButton">
          <span style={{color: 'red'}}>B</span>
          <span style={{color: 'blue'}}>a</span>
          <span style={{color: 'orange'}}>b</span>
          <span style={{color: 'green'}}>y</span>
          {" "}
          Levels</button></Link>
        <Link to="/blocks"><button className="menuButton smallMenuButton">Blocks Description</button></Link>
        <Link to="/about"><button className="menuButton smallMenuButton">About</button></Link>
      </div>
    </div>
  )
};

export default MenuPage;