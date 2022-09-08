const express = require('express');
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/auth");
const schemas = require("../validations/Auth");
const { create, index } = require("../controllers/posts");
const router = express.Router();

router.route('/create').post(authenticate, validate(schemas.postValidation),create);

router.route('/posts').get(index);

module.exports = router;
