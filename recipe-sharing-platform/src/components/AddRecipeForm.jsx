import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log({ title, ingredients, steps });
    alert("Recipe submitted!");
  };

  return (
    <div className="flex justify-center items-center p-4 md:p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 md:p-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Add a New Recipe
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 md:p-3 rounded hover:bg-green-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
