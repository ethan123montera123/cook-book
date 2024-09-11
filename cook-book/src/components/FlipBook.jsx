import React, { useState } from 'react';
import './FlipBook.css'; // Import the CSS for flip book styling

const FlipBook = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flipbook-container">
      <div className="flipbook">
        <div className="flipbook-page" style={{ transform: `rotateY(${currentPage * -180}deg)` }}>
          {pages[currentPage]}
        </div>
      </div>
      <button className="flipbook-nav flipbook-prev" onClick={handlePrevPage}>
        &lt; Prev
      </button>
      <button className="flipbook-nav flipbook-next" onClick={handleNextPage}>
        Next &gt;
      </button>
    </div>
  );
};

export default FlipBook;
