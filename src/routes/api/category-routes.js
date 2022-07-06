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
    return res.status(200).json(createNewCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res
        .status(404)
        .json({ message: "No category found with that id!" });
    }
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(updateCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteCategory) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
