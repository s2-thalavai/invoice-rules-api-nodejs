const Joi = require('joi');

exports.ruleSchema = Joi.object({
  id: Joi.string().uuid().required(),
  name: Joi.string().min(3).max(50).required(),
  condition: Joi.string().min(5).required(),
  action: Joi.string().min(5).required()
});
