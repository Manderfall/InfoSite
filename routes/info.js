const express = require("express");
const router = express.Router();

router.get("/info", (req, res) => {
	res.render("info");
});


module.exports = router;