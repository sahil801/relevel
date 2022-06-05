const express = require("express");
const { createUser, getUser } = require("../controllers/user.controller");
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Create routes for user here
router.post('/',createUser);
router.post('/:i)',getUser);
module.exports = router;