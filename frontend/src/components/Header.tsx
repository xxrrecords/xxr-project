import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed text-[14px] top-0 left-0 right-0 bg-[#0e0e0e] text-white h-16 px-4 shadow-md z-50 flex items-center justify-between">
      {/* Left nav (desktop) */}
      <div className="hidden md:flex space-x-4">
         <img src="src/assets/Logos/KiraSoundLogo.png" alt="Logo" className="h-[80px] w-auto" />
      </div>

      {/* Centered Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20"></div>

      {/* Right menu & mobile toggle */}
      <div className="flex items-center space-x-4">
        {/* Right nav (desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/app" className="bg-pink-600 hover:bg-pink-900 text-white px-3 py-1 rounded">
            <span className="text-[14px] text-white hover:text-pink-600">Login</span>
          </Link>
          <Link to="/signup" className="bg-pink-600 hover:bg-pink-900 text-white px-3 py-1 rounded">
            <span className="text-[14px] text-white hover:text-pink-600">Sign-up</span>
          </Link>
          <Link to="/for-artists" className="text-white px-3 py-1 hover:text-pink-600">
            <span className="text-[14px]">For Artists</span>
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute text-[12px] top-16 left-0 w-full bg-[#3114B1] flex flex-col items-left py-4 space-y-4 md:hidden z-40 shadow-lg pl-[10px]">
          <Link to="/login" className="bg-pink-600 hover:bg-pink-900 text-white px-3 py-1 rounded">
            <span className="text-[14px] text-white hover:text-pink-600">Login</span>
          </Link>
          <Link to="/signup" className="bg-pink-600 hover:bg-pink-900 text-white px-3 py-1 rounded">
            <span className="text-[14px] text-white hover:text-pink-600">Sign-up</span>
          </Link>
          <Link to="/for-artists" className="text-white px-3 py-1 hover:text-pink-600">
            <span className="text-[14px]">For Artists</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
