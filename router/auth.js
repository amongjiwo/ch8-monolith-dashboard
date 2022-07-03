const router = require("express").Router();
const { auth } = require("../controllers");
const setLayout = require("../middlewares/setLayout");

// Routers
router.use(setLayout("authentication"));
router.get("/login", auth.login);
router.get("/register", auth.register);

router.post("/login", auth.api.login);

module.exports = router;