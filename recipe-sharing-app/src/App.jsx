import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <Routes>
        {/*Homepage with form and list */}
        <Route 
        path="/"
        element={
          <div>
            <AddRecipeForm />
            <hr />
            <RecipeList />
          </div>
        }
        />
        {/*Details page for individual recipes */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      
    </div>
  );
};

export default App;
