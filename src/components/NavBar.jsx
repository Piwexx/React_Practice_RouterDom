import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <div>
            <ul>
                 <li>
                    <NavLink className={({isActive}) =>isActive ? "active" :""}to="/">Home</NavLink>      
                 </li>
                 <li>
                    <NavLink to="/About">About</NavLink>    
                </li>
                <li>
                    <NavLink to="/Productos">Productos</NavLink>    
                </li>
                <li>
                    <NavLink to="/Dashboard">Dashboard</NavLink>    
                </li>
            </ul>
        </div>
    
    </>
    
  )
}
