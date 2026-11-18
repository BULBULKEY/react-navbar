
import { BrowserRouter, Route, Routes } from "react-router"  //impooooort dheh
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import ReactRouter from "./pages/ReactRouter"
import ReactHook from "./pages/ReactHook"

function App() {
  return (
    <BrowserRouter>

   
   <Navbar/>  

   <Routes>
    < Route element={<Home/>} path="/Home" />
    < Route element={<About/>} path="about" />
    < Route element={<ReactRouter/>} path="react-router" />
    < Route element={<ReactHook/>} path="react-hook" />
   </Routes>
   </BrowserRouter>

  )
}

export default App
