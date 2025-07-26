import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';


const RecipeDetails = () => {
    const {id}= useParams();
    const recipeId = Number(id);
    const recipe = useRecipeStore ((state)=>
    state.recipes.find((r)=>r.id === recipeId)
);
if (!recipe) return <p>Recipe not found</p>;

return (
    <div>
    <h2>{recipe.title}</h2>
    <p>{recipe.description}</p>

    <FavoriteButton recipeId={recipe.id} />
    <EditRecipeForm recipe={recipe} />
    <DeleteRecipeButton id={recipe.id} />
    </div>
);
};

export default RecipeDetails;