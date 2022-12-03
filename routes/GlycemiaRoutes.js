const {Router} = require("express");
const GlycemiaController = require("../controllers/GlycemiaController");

const router = Router();

router.get("/test", GlycemiaController.test);
router.get("/glycemia", GlycemiaController.getAll);
router.get("/glycemia/:id", GlycemiaController.getOne);
router.put("/glycemia/:id", GlycemiaController.update);
router.delete("/glycemia/:id", GlycemiaController.delete);
router.post("/glycemia", GlycemiaController.create);

module.exports = router;