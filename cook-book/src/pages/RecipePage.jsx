import Footer from "../components/Footer";
import Header from "../components/Header";
import Ingredients from "../components/Recipe/Ingredients";
import Procedure from "../components/Recipe/Procedure";
import RecipeInfo from "../components/Recipe/RecipeInfo";
import recipes from "../data/recipes";

//TODO: make text not go beyond the right most edge of image

const RecipePage = () => {
  return (
    <div className="">
      <Header />
        <div className="flex">
            <Ingredients ingredients={recipes[0].ingredients} />
            <div className="overflow y-auto">
              <RecipeInfo  
                title={recipes[0].title}
                image={recipes[0].image}
                rating={recipes[0].rating}
                description={recipes[0].description}
                author={recipes[0].author}
                datePosted={recipes[0].datePosted}
                readyIn={recipes[0].readyIn}
                serving={recipes[0].serving}
              />
              <Procedure procedure={recipes[0].procedure} />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default RecipePage;
