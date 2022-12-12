import React from 'react'
import { useEffect } from 'react'
import { useNavigate ,Route,Routes,Outlet} from 'react-router-dom'
import { Welcome } from './Welcome'

export const Dashboard = () => { 

 
  const navigate  = useNavigate()

  const handleClick = ()=>{
        navigate("/")
  }

  return (
    <>
      <h1>Dashboard</h1>
        {/* <button onClick={handleClick}>LogOut</button> */}
        {/* <Routes>
            <Route path="welcome" element={<Welcome/>}></Route>
        </Routes> */}
        <Outlet/>
        
    </>
  )
}
