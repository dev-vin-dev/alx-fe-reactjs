import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';


function App() {

  return (
    <>
    <Router>
      <div className='bg-gray-100 min-h-screen'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
