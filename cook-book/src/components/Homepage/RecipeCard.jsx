const RecipeCard = ({ title, description, image }) => (
  <div className="bg-[#D8D2C2] shadow-md rounded-lg p-4 w-[360px]">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default RecipeCard;
