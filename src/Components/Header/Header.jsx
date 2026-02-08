import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DPI_hexa_logo from '../../assets/DPI_hexa_logo.png';
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
    setOpenDropdown(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Cloud Solutions", path: "/what-to-do/CloudSolutions" },
    { name: "Cyber Security", path: "/what-to-do/CyberSecrity" },
    { name: "Facility Management", path: "/what-to-do/FacilityManagementServices" },
    { name: "Other Services", path: "/what-to-do/four" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0b1c3f]/80 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4 bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={DPI_hexa_logo} 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            alt="DPI Hexashield Logo"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path 
                  ? "text-blue-400" 
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* DROPDOWN */}
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 focus:outline-none"
            >
              What To Do
              <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 mt-2 w-56 bg-[#0f2a5f] border border-gray-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top-right transform ${
              openDropdown ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
            }`}>
              <div className="py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-600/50 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-[#0b1c3f] transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${
        mobileMenu ? "translate-x-0" : "translate-x-full"
      }`}>
        <button 
          onClick={() => setMobileMenu(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          <HiX />
        </button>
        
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.path} 
            className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
          >
            {link.name}
          </Link>
        ))}

        <div className="relative w-full px-10">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-full flex justify-between items-center text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
          >
            What To Do
            <HiChevronDown className={`w-6 h-6 transition-transform ${openDropdown ? "rotate-180" : ""}`} />
          </button>
          
          {openDropdown && (
            <div className="mt-4 flex flex-col space-y-4 pl-4 border-l-2 border-blue-500/30">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
