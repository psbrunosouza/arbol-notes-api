import Joi from 'joi';

const profileSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null),
});

profileSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});

export { profileSchema };
