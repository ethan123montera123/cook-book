// src/components/FloatingButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingButton.css'; // Import the CSS for styling the button

const FloatingButton = ({ link }) => {
  return (
    <Link to={link} className="floating-button">
      <i className="fas fa-user"></i> {/* Font Awesome user icon */}
    </Link>
  );
};

export default FloatingButton;
