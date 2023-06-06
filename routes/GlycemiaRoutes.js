const { Router } = require("express");
const GlycemiaController = require("../controllers/GlycemiaController");

const router = Router();

router.get("/glycemia", GlycemiaController.find);
router.get("/glycemia/:id", GlycemiaController.findById);
router.post("/glycemia", GlycemiaController.create);
router.put("/glycemia/:id", GlycemiaController.update);
router.delete("/glycemia/:id", GlycemiaController.delete);

module.exports = router;
