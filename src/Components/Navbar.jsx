
// import App from "../../App";
const Navbar=()=>{
    return(
        <nav className="flex items-center justify-between px-2 py-5 shadow-lg">
            <h1 className="text-3xl font-bold">Logo</h1>
            <ul className="flex items-center gap-15">

                {/* <li><a href="Home">home</a></li> */}
                <li>
                <link to="/">Home</link>
                </li>
                {/* <li><a href="about">About</a></li> */}
                <li>
                <link to="/">About</link>
                </li>


                {/* <li><a href="react-router">React router</a></li> */}
                <li>
                <link to="/">react-router</link>
                </li>


                {/* <li><a href="react-hook">React Hook</a></li> */}
                <li>

               <link to="/">React-hook</link>
               </li>


            </ul>
            <button className="bg-gray-400 px-5 py-2 text-white rounded-sm text-2xl">sign in</button>

        </nav>
    )
}
export default Navbar;