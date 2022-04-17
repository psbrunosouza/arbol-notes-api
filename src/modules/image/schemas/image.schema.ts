import Joi from 'joi';

const imageSchema = Joi.object({
  link: Joi.string().required(),
  description: Joi.string().allow(null),
});

imageSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});

export { imageSchema };
