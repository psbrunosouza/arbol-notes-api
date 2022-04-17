import Joi from 'joi';

const branchSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null),
  category: Joi.object().allow(null),
  user: Joi.object().required(),
  status: Joi.object().allow(null),
  parent: Joi.object().allow(null),
});

branchSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});

export { branchSchema };
