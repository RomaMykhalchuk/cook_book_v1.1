const { Router } = require('express');
const { Recipe } = require('../models/Recipe');

const router = Router();

router.get('/', async(req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Loading data error, please try again" });
  }
});

router.post('/new', async(req, res) =>{
  const data = req.body;

  try {
    const newRecipe = new Recipe(data);
    await newRecipe.save();
    res.status(201).json({ message: "Your recipe successfully added" });
  } catch (error) {
    res.status(500).json({ message: "Recipe was not added, please try again" });
  }
});

module.exports = router;