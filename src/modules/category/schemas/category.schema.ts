import Joi from 'joi';

const categorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null),
});

categorySchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});

export { categorySchema };
