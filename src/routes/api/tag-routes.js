const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const getAllTags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    return res.status(200).json(getAllTags);
  } catch (err) {
    return res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const getSingleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!getSingleTag) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }

    return res.status(200).json(getSingleTag);
  } catch (err) {
    return res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  try {
    const createNewTag = await Tag.create(req.body);
    return res.status(200).json(createNewTag);
  } catch (err) {
    return res.status(400).json(err);
  }
  // create a new tag
});

router.put("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(404).json({ message: "No tag found with that id!" });
    }

    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(updateTag);
  } catch (err) {
    return res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteTag) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
