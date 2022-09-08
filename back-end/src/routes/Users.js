const express = require('express');
const validate = require("../middlewares/validate");
const schemas = require("../validations/Auth");
const authenticate = require("../middlewares/auth");
const { create, index, login, edit, mypost, postdelete } = require("../controllers/Users");
const router = express.Router();

router.route('/register').post(validate(schemas.registerValidation),create);

router.route('/myuser/:id').get(authenticate,index);

router.route('/login').post(validate(schemas.loginValidation),login);

router.route('/edit/:id').put(authenticate,edit);

router.route('/post/:id').get(authenticate,mypost);

router.route('/post/delete/:id').delete(authenticate,postdelete);

module.exports = router;
