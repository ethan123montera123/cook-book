const RecipeCard = ({ title, description, image }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default RecipeCard;
