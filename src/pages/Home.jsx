import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
   <>
      <h1>Home</h1>
      <Link to="/about">Ir a About</Link>
   </>
  )
}
