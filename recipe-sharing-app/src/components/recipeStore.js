import { create } from "zustand";

export const useRecipeStore = create ((set)=> ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    recommendations: [],
    //Add a new recipe
    addRecipe: (newRecipe) =>
        set((state) => {
            const updated = [...state.recipes, newRecipe];
            return {
                recipes: updated,
                filteredRecipes: updated.filter((recipe) =>
                    recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),
        
        deleteRecipe: (id) =>
            set((state) => {
                const updated = state.recipes.filter((recipe) => recipe.id !== id);
                return {
                    recipes: updated,
                    filteredRecipes: updated.filter((recipe) =>
                        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                    ),
                };
            }),

            updateRecipe: (updatedRecipe) =>
                set((state) => {
                    const updated = state.recipes.map((recipe) =>
                        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
                    );
                    return {
                        recipes: updated,
                        filteredRecipes: updated.filter((recipe) =>
                            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                        ),
                    };
                }),
            setSearchTerm: (term) =>
                set((state)=> ({
                    searchTerm: term,
                    filteredRecipes: state.recipes.filter((recipe)=>
                        recipe.title.toLowerCase().includes(term.toLowerCase())),
                })),

            //Favorites
            addFavorites: (recipeId)=>
                set((state)=> ({
                    favorites: [...new Set([...state.favorites, recipeId])],
                })),

            removeFavorite: (recipeId) =>
                set((state)=> ({
                    favorites: state.favorite.filter((id) => id !== recipeId),
                })),

                //recommendations
                generateRecommendations: () =>
                    set((state) => {
                        const recommended = state.recipes.filter(
                            (recipe) =>
                                !state.favorites.includes(recipe.id) && Math.random() > 0.5
                        );
                        return { recommendations: recommended };
                    }),
    
        //optionally replace the recipe list
        setRecipes: (recipes) => set({recipes}),
}));