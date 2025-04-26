import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, LogOut } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch {
      // Handle error
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>BetAware</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
            Home
          </Link>
          <Link to="/#features" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
            Features
          </Link>
          <Link to="/#about" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
            About
          </Link>

          {currentUser ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Sign Up
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> : <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/#features" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Features
            </Link>
            <Link to="/#about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              About
            </Link>

            {currentUser ? (
              <>
                <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="flex items-center w-full py-2 text-red-500 hover:text-red-600 font-medium"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
                  Login
                </Link>
                <Link to="/register" className="block py-2 bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md transition-colors" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;