import { Link } from "react-router-dom";
import { useState } from "react";
import DAI_logo from '../../assets/DAI_logo.png'

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-4 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          <img src={DAI_logo} className="h-20 w-60" alt=""/>
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>

          {/* DROPDOWN (CLICK BASED) */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="hover:text-gray-300 focus:outline-none"
            >
              What To Do
            </button>

            {openDropdown && (
              <div className="absolute top-10 left-0 bg-white text-black rounded shadow-lg w-56 z-50">
                <Link
                  to="/what-to-do/CloudSolutions"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setOpenDropdown(false)}
                >
                  Cloud Solutions
                </Link>

                <Link
                  to="/what-to-do/CyberSecrity"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setOpenDropdown(false)}
                >
                  Cyber Security
                </Link>

                <Link
                  to="/what-to-do/FacilityManagementServices"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setOpenDropdown(false)}
                >
                  Facility Management
                </Link>

                <Link
                  to="/what-to-do/four"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setOpenDropdown(false)}
                >
                  Other Services
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 space-y-3">
          <Link to="/" onClick={() => setMobileMenu(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setMobileMenu(false)} className="block">
            About
          </Link>
          <Link to="/contact" onClick={() => setMobileMenu(false)} className="block">
            Contact
          </Link>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full text-left"
            >
              What To Do
            </button>

            {openDropdown && (
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/what-to-do/CloudSolutions" onClick={() => setMobileMenu(false)}>
                  Cloud Solutions
                </Link>
                <Link to="/what-to-do/CyberSecrity" onClick={() => setMobileMenu(false)}>
                  Cyber Security
                </Link>
                <Link to="/what-to-do/FacilityManagementServices" onClick={() => setMobileMenu(false)}>
                  Facility Management
                </Link>
                <Link to="/what-to-do/four" onClick={() => setMobileMenu(false)}>
                  Other Services
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
