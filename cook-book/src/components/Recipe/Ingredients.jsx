const Ingredients = ({ ingredients }) => {
    const displayIngredients = () => {
        return ingredients.map((ingredient) => (
            <li key="index">{ingredient}</li>
    ))}

    return (
        // TODO: fix height later
        // height calc h-[calc(100vh-8rem)]
        <div className="bg-[#D8D2C2] xl:w-[600px] xl:h-screen sticky top-0">
            <h1 className="font-heading font-bold text-center mt-20 mb-8 text-2xl">Ingredients:</h1>
            <div className="ml-8 text-lg">
                {displayIngredients()}
            </div>
        </div>
    )
}

export default Ingredients;
