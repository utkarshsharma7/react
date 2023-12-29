import React from 'react'
import logo from "../assets/Logo/blogger-spot-high-resolution-logo-black.png";

function Logo({width = '100px'}) {
  return (
    <div><img src={logo} alt="" /></div>
  )
}

export default Logo