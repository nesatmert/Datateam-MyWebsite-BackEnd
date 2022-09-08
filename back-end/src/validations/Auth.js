const Joi = require("joi");

const registerValidation = Joi.object({
    user_name: Joi.string().required().min(3).max(255),
    mail: Joi.string().required().email().min(6).max(255),
    password: Joi.string().required().min(6).max(255),
  });
  
  const loginValidation = Joi.object({
    mail: Joi.string().required(),
    password: Joi.string().required(),
  });

const postValidation = Joi.object({
  title: Joi.string().required().min(3).max(255),
  description: Joi.string().required().min(6).max(255),
});


module.exports = {
    registerValidation,
    loginValidation,
    postValidation,
}