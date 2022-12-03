const {Router} = require("express");
const GlycemiaController = require("../controllers/GlycemiaController");

const router = Router();

router.get("/test", GlycemiaController.test);

module.exports = router;