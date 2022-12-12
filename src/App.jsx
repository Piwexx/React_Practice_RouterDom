import { Route,Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NavBar } from "./components/NavBar"
import "./index.css"
import { UserPage } from "./pages/UserPage"
import { Productos } from "./pages/Productos"
import { Dashboard } from "./pages/Dashboard"
import { Welcome } from "./pages/Welcome"
import { GoodBye } from "./pages/GoodBye"
import { useState } from "react"
import { Auth } from "./components/Auth"

function App() {
    const [user,setUser] = useState()

    const login = () =>{
      setUser({
        id : 1,
        name :"Juan"
      })
    }
    const logOut = () =>{
      setUser(null)
    }
  return (
    <>
      <NavBar/>
      {
        user ? <button onClick={logOut}>LogOut</button> : <button onClick={login}>Login</button>
      }
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/productos" element={<Productos/>}></Route>
        {/* Componente Auth */}
        <Route element={<Auth user={user} redirecTo={"/about"}/>}>
            <Route path="/dashboard/" element={<Dashboard/>}>
               {/* <Route path="welcome" element={<Welcome/>}></Route>
               <Route path="goodbye" element={<GoodBye/>}></Route> */}
            </Route>
        </Route>
        <Route path="/user/:id/" element={<UserPage/>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
