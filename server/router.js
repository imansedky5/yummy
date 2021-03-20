const router = require("express").Router();
const isAuth = require("./middlewares/auth");

const {
  signupHandler,
  loginHandler,
  logoutHandler,
} = require("./controller/index");

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.use(isAuth);
router.get("/hi", (req, res) => {
  res.send("hi");
});
router.get("/logout", logoutHandler);

module.exports = router;
