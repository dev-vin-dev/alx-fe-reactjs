import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";


const RecipeDetail = () =>{
    const {id} = useParams();
    const [recipe, setRecipe]=useState(null);

    useEffect(()=> {
        const foundRecipe = recipeData.find((r)=> r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return <p className="text-center mt-10">Recipe not found.</p>
    }

    return (
        <div className="p-6 max-w-3x1 mx-auto">
            <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Home
             </Link>
             <div className="bg-white rounded-x1 shadow-lg overflow-hidden">
                <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3x1 font-bold mb-4">{recipe.title}</h1>
                    <p className="text-gray-700 mb-6">{recipe.summary}</p>

                    {/*Ingredients*/}
                    <div className="mb-6">
                        <h2 className="text-x1 font-semibold mb-2">Ingredients</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {recipe.Ingredients?.map((ingredient, idx)=> (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    {/*Instructions*/}
                    <div>
                        <h2 className="text-x1 font-semibold mb-2">Instructions</h2>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            {recipe.instructions?.map((step, idx)=> (
                                <li key={idx}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default RecipeDetail;