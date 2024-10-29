import Button from "../components/UI/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import CategoryCard from "../components/Homepage/CategoryCard";
import RecipeCard from "../components/Homepage/RecipeCard";
import recipes from "../data/recipes";

const NewHomePage = () => {
    const buttonClass = "outline rounded-md bg-[#FAF7F0] w-20"

    return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="">

        <section className="flex justify-center">
          <div className="relative h-[500px] w-[1300px] flex items-center">
            <img 
              src="https://www.allrecipes.com/thmb/6UaBC03j_WXNoBfyOgW2hDMec2g=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/245775-spaghetti-alla-carbonara-the-traditional-italian-recipe-DDMFS-4x3-879c32ee3cfb463582e3e6230e311029.jpg" 
              alt="cover_image" 
              className="w-full h-full mt-12"
            />
            <div className="absolute right-0 bg-[#1E1E1E] text-white p-4 w-[500px] h-[200px] flex flex-col justify-center">
                <h1 className="text-6xl font-heading font-bold ml-4">CARBONARA</h1>
                <p className="text-xl font-heading ml-4">FOOD OF THE DAY</p>
            </div>
          </div>
        </section>

        
        <section className="mt-20 mx-20">
            <h2 className="text-xl">Looking for food?</h2>
            <h2 className="text-xl font-bold mb-4">Explore the Diverse Culture, One Bite at a Time!</h2>
            <div className="flex gap-4">
                <Button 
                    name="Breakfast"
                    dest=""
                    className={buttonClass}
                    onClick=""
                />
                <Button 
                    name="Lunch"
                    dest=""
                    className={buttonClass}
                    onClick=""
                />
                <Button 
                    name="Dinner"
                    dest=""
                    className={buttonClass}
                    onClick=""
                />
                <Button 
                    name="Other"
                    dest=""
                    className={buttonClass}
                    onClick=""
                />
            </div>
        </section>
        
        <section className="flex justify-center">
            <div className="grid grid-cols-3 mt-10 gap-10">
                <RecipeCard 
                    title={recipes[0].title}
                    description={recipes[0].description}
                    image={recipes[0].image}
                />
                <RecipeCard 
                    title={recipes[1].title}
                    description={recipes[1].description}
                    image={recipes[1].image}
                />
                <RecipeCard 
                    title={recipes[2].title}
                    description={recipes[2].description}
                    image={recipes[2].image}
                />
            </div>

        </section>

        <section className="bg-[#FAF7F0] text-gray-800 text-center py-12 rounded-lg shadow-lg w-[800px] flex justify-center mx-auto my-20">
            <div>
                <h2 className="text-3xl font-semibold mb-4">Join Our Culinary Adventure</h2>
                <p className="text-lg mb-6">
                    Be part of our community and receive the latest recipes, tips, and exclusive offers.
                </p>
                <a href="/signup" className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md">
                    Join Us
                </a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NewHomePage;
