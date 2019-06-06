import React from 'react'
import { Link } from 'react-router-dom'

const map = "/map";

const NavBar = () => (
  <div>
    <Link to="/">Home</Link> &nbsp;
    <Link to="/hello">Hello</Link> &nbsp;
    <Link to="/counter">Counter</Link> &nbsp;
    <Link to={ map }>Map</Link>
  </div>
);

export default NavBar
