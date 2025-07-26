import { create } from "zustand";

export const useRecipeStore = create ((set)=> ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
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
    
        //optionally replace the recipe list
        setRecipes: (recipes) => set({recipes}),
}));