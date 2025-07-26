import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({recipeId}) => {
    const favorites = useRecipeStore((state)=> state.favorites);
    const addFavorite = useRecipeStore((state)=> state.addFavorites);
    const removeFavorite = useRecipeStore((state)=> state.removeFavorite);

    const isFavorite = favorites.includes(recipeId);

    const toggleFovorite = () => {
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
    };

    return (
        <button onClick={toggleFovorite}>
            {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
        </button>
    );
};

export default FavoriteButton;