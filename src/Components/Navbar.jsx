
// // import App from "../../App";
// const Navbar=()=>{
//     return(
//         <nav className="flex items-center justify-between px-2 py-5 shadow-lg">
//             <h1 className="text-3xl font-bold">Logo</h1>
//             <ul className="flex items-center gap-15">

//                 {/* <li><a href="Home">home</a></li> */}
//                 <li>
//                 <link to="/">Home</link>
//                 </li>
//                 {/* <li><a href="about">About</a></li> */}
//                 <li>
//                 <link to="/">About</link>
//                 </li>


//                 {/* <li><a href="react-router">React router</a></li> */}
//                 <li>
//                 <link to="/">react-router</link>
//                 </li>


//                 {/* <li><a href="react-hook">React Hook</a></li> */}
//                 <li>

//                <link to="/">React-hook</link>
//                </li>


//             </ul>
//             <button className="bg-gray-400 px-5 py-2 text-white rounded-sm text-2xl">sign in</button>

//         </nav>
//     )
// }
// export default Navbar;


import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-5 shadow-lg">
      {/* Logo */}
      <h2 className="text-2xl font-bold">Logo</h2>

      {/* Navigation Links */}
      <ul className="flex items-center gap-10 font-medium">
        <li>
          <Link to="/Home">Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/React-Router">ReactRouter</Link>
        </li>

        <li>
          <Link to="/React-Hooks">ReactHooks</Link>
        </li>
      </ul>

      {/* Sign In Button */}
      <button className="bg-gray-400 px-5 py-2 text-white rounded-2xl hover:bg-gray-600 transition">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;