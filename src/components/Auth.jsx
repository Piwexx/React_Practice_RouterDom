import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Auth = ({user,children,redirecTo}) => {

  if(!user){
    return <Navigate to={redirecTo}/>
  }
  return (
    <>
       {children ?  children : <Outlet/> }
       
    </>
  )
}
