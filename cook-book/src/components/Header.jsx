import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success('Logout successful!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getFirstName = (displayName) => {
    if (displayName) {
      const names = displayName.split(' ');
      return names[0]; // Return the first part of the displayName
    }
    return 'User';
  };

  return (
    <>
      <header className="header p-4 bg-[#FAF7F0] shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="../../src/assets/Logo1.png" alt="Logo" className="h-12 w-12 mr-4" />
            <span className="text-2xl font-semibold text-black font-heading">Uncharted <span className="text-accent">Creatives</span></span>
          </div>

          {/* Navbar Links */}
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-lg font-medium text-black hover:text-accent transition duration-300">
              Menu
            </Link>
            <Link to="/about" className="text-lg font-medium text-black hover:text-accent transition duration-300">
              About Us
            </Link>
            <Link to="/contact" className="text-lg font-medium text-black hover:text-accent transition duration-300">
              Contact Us
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center border border-accent rounded-md px-3 py-1 w-1/3">
            <i className="fas fa-search text-accent mr-2"></i>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-black w-full"
            />
          </div>

          {/* Login and Sign-Up Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-700">Hello, {getFirstName(user.displayName || user.email)}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-lg font-medium text-black hover:text-accent transition duration-300"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default Header;
