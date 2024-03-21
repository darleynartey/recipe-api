import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

const router = Router();

//Define routes
router.post('/recipes', addRecipe);

//Get all recipes
router.get('/recipes', getRecipes);

//Get recipes by a single id
router.get('/recipes/:id', getRecipe);

//Update a single recipe by id 
router.patch('/recipes/:id', updateRecipe);

//Delete a single recipe by id
router.delete('/recipes/:id', deleteRecipe);


//Export Router
export default router;