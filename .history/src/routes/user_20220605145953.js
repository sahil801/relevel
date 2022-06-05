const express = require("express");
const { createUser } = require("../controllers/user.controller");
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Create routes for user here
router.post('/',createUser)

module.exports = router;