import { Router } from "express";

const router = Router();

//Define routes
router.post('/recipes', (req, res) => {
    res.send('Add recipe');
});

//Get all recipes
router.get('/recipes', (req, res) => {
    res.send('Get all recipes'); 
});

//Get recipes by a single id
router.get('/recipes/:id', (req, res) => {
    res.send(`Get a single recipe with id: ${req.params.id}`);
});

//Update a single recipe by id 
router.patch('/recipes/:id', (req, res) => {
    res.send(`Update a single recipe! by id: ${req.params.id}`);
});

//Delete a single recipe by id
router.delete('/recipes/:id', (req, res) => {
    res.send(`Delete a single recipe! by id: ${req.params.id}`);
});


//Export Router
export default router;