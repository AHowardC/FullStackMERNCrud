const router = require("express").Router();
const controllers = require("./controllers");

router.get("/", controllers.getAll);
router.post("/", controllers.create);
router.delete("/:todoId", controllers.delete);
router.put("/:todoId/complete", controllers.complete);

module.exports = router;
