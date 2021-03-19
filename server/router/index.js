const router = require("express").Router();

const { signupHandler } = require("./controller/index");

router.get("/", (req, res) => {
    res.send("hi");

});

router.post("/signup", signupHandler);

module.exports = router; 