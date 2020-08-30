const { Router } = require("express");
const { check, validationResult, body } = require("express-validator");
const Recipe = require("../../models/Recipe");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Loading data error, please try again" });
  }
});

router.post(
  "/new",
  [
    body("title").isString().isLength({ min: 5 }),
    body("image").isURL(),
    body("description").isString().isLength({ min: 10 }),
    body("ingredients").isArray(),
    body("cuisine").isString(),
    body("meal").isString(),
  ],
  async (req, res) => {
    const data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message: 'Incorrect recipe data' });
    }
    try {
      const newRecipe = new Recipe(data);
      await newRecipe.save();
      console.log(newRecipe);
      res.status(201).json({ message: "Your recipe successfully added" });
    } catch (error) {
      res.status(500).json({ message: `${error.message}` });
    }
  }
);

module.exports = router;
