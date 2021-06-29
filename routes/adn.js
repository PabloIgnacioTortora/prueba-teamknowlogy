const express = require("express");
const dnaController = require("../controller/adn");
const router = express.Router();

router.post("/mutation", [
  dnaController.hasMutation,
  dnaController.checkAdnExisted,
  dnaController.saveAdn
]);
router.post("/stats", );

module.exports = router;
