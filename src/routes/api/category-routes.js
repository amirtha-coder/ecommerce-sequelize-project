const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const getAllCategories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getAllCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
    const getSingleCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!getSingleCategory) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }

    res.status(200).json(getSingleCategory);
  } catch (err) {
    res.status(500).json(err);
    // find one category by its `id` value
    // be sure to include its associated Products
  }
});

router.post("/", async (req, res) => {
  try {
    const createNewCategory = await Category.create(req.body);
    res.status(200).json(createNewCategory);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
