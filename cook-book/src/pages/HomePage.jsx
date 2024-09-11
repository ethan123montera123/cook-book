import React from 'react';
import Header from '../components/Header'; // Adjust path if necessary
import RecipeCard from '../components/RecipeCard'; // If needed for featured recipes
import CategoryCard from '../components/CategoryCard'; // If needed for categories
import FlipBookPage from './FlipBookPage';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto p-6">
        {/* Cover Page Section */}
        <section className="bg-green-500 text-white text-center py-16 rounded-lg mb-12 shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Cookbook Heaven</h1>
          <p className="text-xl mb-8">
            Explore a collection of timeless recipes, each a chapter in our culinary book.
          </p>
          <a href="/flipbookpage" className="bg-white text-green-500 py-3 px-6 rounded-lg font-semibold shadow-md">
            Open Cookbook
          </a>
        </section>

        {/* Featured Recipes Section */}
        <section id="recipes" className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center">Featured Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecipeCard
              title="Spaghetti Carbonara"
              description="A classic Italian pasta dish with creamy sauce, eggs, and pancetta."
              image="/path-to-image.jpg" // Replace with actual image path
            />
            <RecipeCard
              title="Chicken Tikka Masala"
              description="A flavorful and spicy chicken curry in a creamy tomato sauce."
              image="/path-to-image.jpg" // Replace with actual image path
            />
            <RecipeCard
              title="Vegan Buddha Bowl"
              description="A healthy and colorful bowl packed with vegetables, grains, and a tasty dressing."
              image="/path-to-image.jpg" // Replace with actual image path
            />
            {/* Add more RecipeCard components as needed */}
          </div>
        </section>

        {/* Recipe Categories Section */}
        <section id="categories" className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center">Recipe Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Breakfast"
              description="Start your day with healthy and delicious breakfast recipes."
            />
            <CategoryCard
              title="Lunch"
              description="Find the perfect lunch recipes to keep you energized throughout the day."
            />
            <CategoryCard
              title="Dinner"
              description="Explore hearty and satisfying dinner options for every taste."
            />
            <CategoryCard
              title="Desserts"
              description="Indulge in sweet and delectable desserts to finish your meal."
            />
            {/* Add more CategoryCard components as needed */}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-100 text-gray-800 text-center py-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Join Our Culinary Adventure</h2>
          <p className="text-lg mb-6">
            Be part of our community and receive the latest recipes, tips, and exclusive offers.
          </p>
          <a href="/signup" className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md">
            Join Us
          </a>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-4 text-center">
        <p>&copy; 2024 Cookbook Heaven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
