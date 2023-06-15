import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    // Perform logout logic (e.g., clear session, remove tokens, etc.)
    setCurrentUser(null);
    navigate("/");
  };

  //unauthenticated navbar error

  return (
      <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="font-bold text-xl">
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center">
                {currentUser ? (
                    <>
                      {/* Render links for authenticated user */}
                      <Link
                          to="/dashboard"
                          className="mr-4 text-gray-800 hover:text-gray-600"
                      >
                        Dashboard
                      </Link>
                      <button
                          onClick={handleLogout}
                          className="text-gray-800 hover:text-gray-600"
                      >
                        Logout
                      </button>
                    </>
                ) : (
                    <>
                      {/* Render links for non-authenticated user */}
                      <Link
                          to="/login"
                          className="mr-4 text-gray-800 hover:text-gray-600"
                      >
                        Login
                      </Link>
                      <Link
                          to="/signup"
                          className="text-gray-800 hover:text-gray-600"
                      >
                        Sign Up
                      </Link>
                    </>
                )}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                  type="button"
                  className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  onClick={handleNav}
              >
                {nav ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                      <path
                          fillRule="event"
                          d="M13.707 8L19 13.293V16a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1.586L12.707 17H7.293L2 11.707V9a1 1 0 011-1h1a1 1 0 011 1v1.586L7.293 7H12.707L18 12.293V9a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1h-3.586L13 8.707V8z"
                          clipRule="event"
                      />
                      <path
                          fillRule="event"
                          d="M2 7.293L7.293 2H12.707L18 7.293V9a1 1 0 01-1 1h-1a1 1 0 01-1-1V7.586L12.707 4H7.293L2 9.293V9a1 1 0 01-1-1V7.293zM3 10v7a2 2 0 002 2h10a2 2 0 002-2v-7h2a1 1 0 011 1v7a4 4 0 01-4 4H5a4 4 0 01-4-4v-7a1 1 0 011-1h2zm7-3a1 1 0 011 1v2a1 1 0 01-2 0V8a1 1 0 011-1z"
                          clipRule="event"
                      />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {nav && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {currentUser ? (
                    <>
                      {/* Render links for authenticated user */}
                      <Link
                          to="/dashboard"
                          className="block text-gray-800 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <button
                          onClick={handleLogout}
                          className="block text-gray-800 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                ) : (
                    <>
                      {/* Render links for non-authenticated user */}
                      <Link
                          to="/login"
                          className="block text-gray-800 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                      <Link
                          to="/signup"
                          className="block text-gray-800 hover:bg-gray-100"
                      >
                        Sign Up
                      </Link>
                    </>
                )}
              </div>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
