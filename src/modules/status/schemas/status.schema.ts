import Joi from 'joi';

const statusSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null),
});

statusSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});

export { statusSchema };
