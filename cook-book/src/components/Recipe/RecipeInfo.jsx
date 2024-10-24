const RecipeInfo = ({ title, image, rating, description, author, datePosted, readyIn, serving }) => {
  return (
    <div className="ml-20">
        <h1 className="mt-10 mb-4 font-heading text-2xl font-bold">{title}</h1>
        <img className="w-[900px]" src={image} alt={title} />
        <div className="grid grid-flow-col auto-cols-max my-4 text-lg">
            <h2 className="mr-10 font-heading text-4xl font-bold">{rating}</h2>
            <p>{description}</p>
        </div>
        <div className="grid grid-cols-2 text-lg">
            <div className="flex">
                <h2 className="mr-2 font-bold">Author:</h2>
                <h2>{author}</h2>
            </div>
            <div className="flex">
                <h2 className="mr-2 font-bold">Date Posted:</h2>
                <h2>{datePosted}</h2>
            </div>
            <div className="flex">
                <h2 className="mr-2 font-bold">Ready In:</h2>
                <h2>{readyIn}</h2>
            </div>
            <div className="flex">
                <h2 className="mr-2 font-bold">Serving:</h2>
                <h2>{serving}</h2>
            </div>
        </div>
    </div>
  )
}

export default RecipeInfo;