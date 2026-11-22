
// import { BrowserRouter, Route, Routes } from "react-router"  //impooooort dheh
// import Navbar from "./Components/Navbar"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import ReactRouter from "./pages/ReactRouter"
// import ReactHook from "./pages/ReactHook"

// function App() {
//   return (
//     <BrowserRouter>

   
//    <Navbar/>  

//    <Routes>
//     < Route element={<Home/>} path="/Home" />
//     < Route element={<About/>} path="about" />
//     < Route element={<ReactRouter/>} path="react-router" />
//     < Route element={<ReactHook/>} path="react-hook" />
//    </Routes>
//    </BrowserRouter>

//   )
// }

// export default App

import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ReactRouters from "./Pages/ReactRouter";
import ReactHooks from "./Pages/ReactHook";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home/>} path="/Home" />
          <Route element={<About/>} path="/About" />
          <Route element={<ReactRouters/>} path="/React-Router" />
          <Route element={<ReactHooks/>} path="/React-Hooks" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;