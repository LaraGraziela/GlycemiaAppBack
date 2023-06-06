const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router.get("/users", UserController.find);
router.get("/users/:id", UserController.findById);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);
router.post("/user", UserController.create);
router.post("/login", UserController.login);

module.exports = router;
