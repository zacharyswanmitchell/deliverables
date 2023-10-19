var express = require("express");
var router = express.Router();

const skillsCtrl = require("../controllers/skills");
// All actual paths start with "/todos"

// GET /todos
router.get('/', skillsCtrl.index);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;