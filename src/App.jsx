

import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./Pages/Home";
import About from "./Pages/About";

import Navbar from "./Components/Navbar";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home/>} path="/Home" />
          <Route element={<About/>} path="/About" />
          <Route element={<Services/>}path="/Services"/>
          <Route element ={<Contacts/>} path="/Contacts"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;