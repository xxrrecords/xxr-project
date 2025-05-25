import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/Logos/kirasoundlogo.png";
import ProfileImage from "../../assets/ProfileImage.png";

export default function PF_Layout() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();


  const links = [
    { name: "New", path: "/app/trending" },
    { name: "Recommended", path: "/app/recommended" },
    { name: "Artists", path: "/app/artists" },
  ];

  return (
    <div className="flex h-screen text-[12px]">
      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-[#0e0e0e] text-white flex flex-col z-50">
        {/* Top section */}
        <div>
          <div className="flex items-center justify-between px-6 py-4 border-gray-700">
            <img src={Logo} alt="Logo" className="h-[90px] w-auto" />
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setNavOpen(false)}
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col mt-4 space-y-2 px-4">
            <li>
              <Link
                to="/app"
                className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white">
                <i className="fa fa-house"></i> <span> Home</span>
              </Link>
            </li>
          </ul>

          <div className="mt-2 border-t border-gray-700 px-4 py-4">
            <i className="fa fa-layer-group"></i> <span>Libary</span>
          </div>

          <ul className="flex flex-col mt-0 space-y-2 px-4">
            <li>
              <Link
                to="/app"
                className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white"
              >
                <i className="fa fa-fire-flame-curved"></i> <span> Hot</span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/settings"
                className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white"
              >
                <i className="fa fa-gem"></i> <span>New</span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/settings"
                className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white"
              >
                <i className="fa fa-heart"></i> <span>Favorite</span>
              </Link>
            </li>
          </ul>

          <div className="mt-2 border-t border-gray-700 px-4 py-4 space-y-2">
            <i className="fa fa-music"></i> <span>Playlists</span>
          </div>
        </div>

        <ul className="flex flex-col mt-0 space-y-2 px-4">
            <li>
              <Link
                to="/app" className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white" >
                <i className="fa fa-plus"></i> <span> Playlist</span>
              </Link>
            </li>
          </ul>

        {/* Bottom section */}
        <div className="mt-auto border-t border-gray-700 px-4 py-4">
          <Link
            to="/app/profile"
            className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white"
          >
            <i className="fa fa-user"></i> Profile
          </Link>
          <Link
            to="/app/help"
            className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white"
          >
            <i className="fa fa-question-circle"></i> Help
          </Link>
          <Link
            to="/app/logout"
            className="block px-3 py-2 rounded text-white hover:bg-pink-600 hover:text-white"
          >
            <i className="fa fa-sign-out-alt"></i> Logout
          </Link>
        </div>
      </nav>

      {/* Main content wrapper */}
      <div className="flex-1 ml-64 flex flex-col" style={{ height: "100vh" }}>
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 bg-[#0e0e0e] text-white h-16 flex items-center justify-between px-6 shadow z-40">
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-pink-600 ${
                  location.pathname === link.path
                    ? "border-b border-gray-400 text-white"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            {/* Search input */}
            <div className="relative">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-1 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-pink-500"
              />
            </div>

            {/* Notifications */}
            <button
              className="relative p-2 rounded hover:bg-gray-700"
              aria-label="Notifications"
            >
              <i className="fa fa-bell"></i>
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-pink-600 rounded-full"></span>
            </button>

            {/* Profile */}
            <Link
              to="/app/profile"
              className="flex items-center space-x-2 px-3 py-2 rounded"
            >
              <img
                src={ProfileImage}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 mb-16 overflow-auto px-0">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bottom-0 left-64 right-0 bg-[#0d0d0d] text-white py-4 px-6 flex items-center justify-between z-40 text-[12px]">
          <div>
            © {new Date().getFullYear()} KiraSound. All rights reserved. Proudly
            part of the XXR Records Group.
          </div>
          <img src={Logo} alt="KiraSound Logo" className="h-[50px] w-auto" />
        </footer>
      </div>

      {/* Mobile nav overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}
    </div>
  );
}
