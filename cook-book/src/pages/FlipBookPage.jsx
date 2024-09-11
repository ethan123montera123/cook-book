import React from 'react';
import Header from '../components/Header'; // Adjust path if necessary
import FlipBook from '../components/FlipBook';

const FlipBookPage = () => {
  const pages = [
    <div className="page-content">
      <h2 className="text-4xl font-bold mb-4">Page 1: Spaghetti Carbonara</h2>
      <p>A classic Italian pasta dish with creamy sauce, eggs, and pancetta.</p>
      {/* Add more content or images as needed */}
    </div>,
    <div className="page-content">
      <h2 className="text-4xl font-bold mb-4">Page 2: Chicken Tikka Masala</h2>
      <p>A flavorful and spicy chicken curry in a creamy tomato sauce.</p>
      {/* Add more content or images as needed */}
    </div>,
    <div className="page-content">
      <h2 className="text-4xl font-bold mb-4">Page 3: Vegan Buddha Bowl</h2>
      <p>A healthy and colorful bowl packed with vegetables, grains, and a tasty dressing.</p>
      {/* Add more content or images as needed */}
    </div>
    // Add more pages as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4">Cookbook</h1>
          <p className="text-xl mb-8">Flip through our cookbook to discover delicious recipes.</p>
          <FlipBook pages={pages} />
        </section>
      </main>
      <footer className="bg-green-600 text-white py-4 text-center">
        <p>&copy; 2024 Cookbook Heaven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FlipBookPage;
