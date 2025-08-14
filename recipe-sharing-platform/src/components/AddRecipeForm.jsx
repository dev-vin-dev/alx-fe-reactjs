import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Recipe title is required";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      formErrors.ingredients = "Include at least two ingredients (comma separated)";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps,
      };
      console.log("New Recipe Submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-6"
      >
        {/* Title Field */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block font-semibold mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            rows="4"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div>
          <label className="block font-semibold mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            rows="6"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
