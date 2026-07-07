import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTaxi } from 'react-icons/fa';
import { navLinks, whatsappLink } from '../data/company';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            scrolled ? 'bg-gold-500' : 'bg-gold-500'
          }`}>
            <FaTaxi className="text-black text-xl" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-heading font-bold text-lg ${scrolled ? 'text-dark-900' : 'text-white'}`}>
              Nasir Makkah
            </span>
            <span className={`text-xs font-medium ${scrolled ? 'text-gold-600' : 'text-gold-400'}`}>
              Cab Service
            </span>
          </div>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : scrolled
                    ? 'text-dark-700 hover:text-gold-500'
                    : 'text-white hover:text-gold-400'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now button (desktop) */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-gold text-sm"
        >
          Book Now
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden text-2xl ${scrolled ? 'text-dark-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-gold-50 text-gold-600'
                        : 'text-dark-700 hover:bg-dark-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center mt-2"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
