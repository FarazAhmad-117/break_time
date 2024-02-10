import { Outlet } from "react-router"
import { Footer, NavBar } from "./components"

function App() {

  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
