import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Car } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Car Insurance",
      path: "/car-insurance",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="logo.png" alt="2mVahan" className="h-12 w-35" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition duration-300"
            >
              Get Quote
            </Link>

            <a
              href="https://admin.yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-lg font-medium transition shadow-md"
            >
              Admin Login
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${isActive ? "text-blue-600" : "text-slate-700"}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center py-3 rounded-lg"
            >
              Get Quote
            </Link>
            <a
              href="https://admin.yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-black text-center text-white px-5 py-2.5 rounded-lg font-medium transition shadow-md"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
