import { create } from "zustand";

export const useRecipeStore = create ((set)=> ({
    recipes: [],
    //Add a new recipe
    addRecipe: (newRecipe)=>
        set((state)=> ({
            recipes: [...state.recipes, newRecipe],
        })),

        //optionally replace the recipe list
        setRecipes: (recipes) => set({recipes}),
}));