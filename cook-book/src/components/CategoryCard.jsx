const CategoryCard = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CategoryCard;
