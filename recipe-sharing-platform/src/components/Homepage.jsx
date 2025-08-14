import React, {useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect (()=> {
        //Simulating fetch from local JSON
        setRecipes(recipeData);
    },[]);

    return (
        <div className="p-6">
            <h1 className="text-3x1 font-bold mb-6 text-center">🍽 Recipe Sharing Platform</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe)=> (
                    <div
                    key={recipe.id}
                    className="bg-white rounded-x1 shadow-md hover:shadow-lg transfrom hover:scale-105 transition duration-300"
                    >
                        <img 
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-48 object-cover rounded-t-x1"
                        />
                        <div className="p-4">
                            <h2 className="text-x1 font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-600 mb-4">{recipe.summary}</p>
                          
                            <Link 
                            to={`/recipe/${recipe.id}`}
                            className="inline-block text-blue-600 font-medium hover:underline"
                            >
                                View Recipe →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
