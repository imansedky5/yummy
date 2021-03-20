const router = require("express").Router();
const { signupHandler, loginHandler } = require("./controller/index");

router.get("/", (req, res) => {
  res.send("hi");
});
router.post("/signup", signupHandler);
router.post("/login", loginHandler);

module.exports = router;
