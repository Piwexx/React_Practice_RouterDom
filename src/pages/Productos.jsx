import React from 'react'
import { Navigate } from 'react-router-dom'

export const Productos = () => {
  return (
   <>
    <h1>Productos</h1>
    <Navigate replace to ="/about"></Navigate>
   </>
  )
}
