const express = require('express');
const router = express.Router();
const fs = require('fs');

const FILE = './data/recipes.json';

function loadRecipes() {
    try {
        return JSON.parse(fs.readFileSync(FILE));
    } catch (err) {
        return [];
    }
}

function saveRecipes(recipes) {
    fs.writeFileSync(FILE, JSON.stringify(recipes, null, 2));
}


//post a new recipe

router.post('/', (req, res) => {
    const { title, ingredients, instructions, cookTime, difficulty} = req.body;

    if (!title || !ingredients || !instructions) {
        return res.status(400).json({error: 'Title, ingredients, and instructions are required'});
    }

    const recipes = loadRecipes();

    const newRecipe = {
        id: Date.now(),
        title,
        ingredients,
        instructions,
        cookTime,
        difficulty: difficulty || 'medium'
    };

    recipes.push(newRecipe);
    saveRecipes(recipes);
    res.status(201).json(newRecipe);
});

//get all recipes

router.get('/', (req, res) => {
    try {
        const recipes = loadRecipes();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({error: 'Failed to load recipes'});
    }
});

module.exports = router;