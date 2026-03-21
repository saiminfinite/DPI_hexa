import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DPI_hexa_logo from '../../assets/DPI_hexa_logo.png';
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(false), 150);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
    setOpenDropdown(false);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
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
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 py-2"
    >
      <div className="w-full flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={DPI_hexa_logo} 
            className="h-7 w-auto max-w-[140px] md:h-10 md:max-w-[160px] rounded-lg transition-all duration-300 group-hover:scale-105 invert"
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
                location.pathname === link.path ? "text-blue-600" : "text-slate-700 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* DROPDOWN - Hover to show, delayed close for smooth transition to dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 focus:outline-none cursor-default"
            >
              Services
              <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu - mt-4 for spacing, delayed close lets user reach it */}
            <div className={`absolute top-full right-0 mt-4 transition-all duration-300 ${
              openDropdown ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}>
              <div className="flex flex-row items-center bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 overflow-hidden">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap border-r border-slate-100 last:border-r-0"
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
          className="md:hidden text-2xl text-slate-800 focus:outline-none"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 transform transition-transform duration-300 md:hidden ${
        mobileMenu ? "translate-x-0" : "translate-x-full"
      }`}>
        <button 
          onClick={() => setMobileMenu(false)}
          className="absolute top-5 right-4 sm:right-6 p-2 -m-2 text-white text-2xl hover:text-blue-100 transition-colors focus:outline-none z-50"
          aria-label="Close menu"
        >
          <HiX />
        </button>
        
        <div className="flex flex-col min-h-full px-8 pt-24 pb-12 overflow-y-auto">
          {/* Main links - top section */}
          <div className="flex flex-col items-center gap-8 mb-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-xl font-semibold text-white hover:text-blue-100 transition-colors py-3"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services - section header with sub-items grid */}
          <div className="w-full max-w-sm mx-auto flex-shrink-0">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center justify-center gap-2 w-full text-lg font-semibold text-white uppercase tracking-wider py-5 border-t border-b border-white/20 mt-2"
            >
              Services
              <HiChevronDown className={`w-5 h-5 transition-transform duration-200 ${openDropdown ? "rotate-180" : ""}`} />
            </button>
            
            {openDropdown && (
              <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors py-3 px-4 rounded-lg border border-white/20"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
