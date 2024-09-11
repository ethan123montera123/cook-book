import React, { useEffect, useState } from 'react';
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
      <header className="header p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1>Cook Book</h1>
        <nav className="flex items-center">
          <Link to="/" className="flex items-center mr-4">Home</Link>
          <Link to="/flipbookpage" className="flex items-center mr-4">Cook Book</Link>
          <Link to="/contact" className="flex items-center mr-4">Contact</Link>
          {user ? (
            <>
              <span className="mr-4">Hello, {getFirstName(user.displayName || user.email)}</span>
              <button onClick={handleLogout} className="btn-logout">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center mr-4">
                <i className="fas fa-user"></i>
              </Link>
            </>
          )}
        </nav>
      </header>
      <ToastContainer />
    </>
  );
};

export default Header;
