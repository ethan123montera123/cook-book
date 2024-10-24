import  { useEffect, useState } from 'react';
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
            <span className="text-2xl font-semibold text-black font-heading">Uncharted Creative</span>
          </div>

          {/* Navbar */}
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-lg font-medium text-gray-700 hover:text-accent transition duration-300">
              Home
            </Link>
            <Link to="/flipbookpage" className="text-lg font-medium text-gray-700 hover:text-accent transition duration-300">
              Cook Book
            </Link>
            <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-accent transition duration-300">
              Contact
            </Link>

            {/* User Greeting and Logout Button */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-700">Hello, {getFirstName(user.displayName || user.email)}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition duration-300"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-accent transition duration-300"
              >
                <i className="fas fa-user mr-2"></i> Login
              </Link>
            )}
          </nav>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default Header;
