import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline } from 'react-icons/md';

const RecipeCard = ({ title, description, image, rating}) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <div className="bg-[#D8D2C2] shadow-md rounded-lg p-6 w-[360px] h-[460px]">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4"/>
      <div className="grid grid-flow-col auto-cols-max">
          {[...Array(totalStars)].map((_, index) => {
            if (index < filledStars) {
                return <MdOutlineStar key={index} color="black" size={25}/>;
            } else if (index === filledStars && hasHalfStar) {
                return <MdOutlineStarHalf key={index} color="black" size={25}/>;
            } else {
            return <MdOutlineStarOutline key={index} color="black" size={25}/>;
            }
        })}
      </div>
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-black text-base ml-5">{description}</p>
    </div>
  )
};

export default RecipeCard;
