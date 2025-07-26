import {BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";


function App() {
  return (
    <BrowserRouter>
    <div style={{ padding:'20px', maxWidth:'600px', margin:'auto'}}>
      <h1>Recipe Sharing App</h1>

      <Routes>
        {/*Homepage with form and list */}
        <Route 
        path="/"
        element={
          <div>
            <SearchBar />
            <AddRecipeForm />
            <hr />
            <RecipeList />
            <hr />
            <FavoritesList />
            <hr />
            <RecommendationsList />
            </div>
        }
        />
        {/*Details page for individual recipes */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
