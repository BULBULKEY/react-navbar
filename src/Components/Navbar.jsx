


import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-5 shadow-lg">
      {/* Logo */}
      <h2 className="text-2xl font-bold">React Router</h2>

      {/* Navigation Links */}
      <ul className="flex items-center gap-10 font-medium">
        <li>
          <Link to="/Home">Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/Services">Services</Link>
        </li>

        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
      </ul>

      {/* Sign In Button */}
      {/* <button className="bg-gray-400 px-5 py-2 text-white rounded-2xl hover:bg-gray-600 transition">
        Sign In
      </button> */}
    </nav>
  );
};

export default Navbar;