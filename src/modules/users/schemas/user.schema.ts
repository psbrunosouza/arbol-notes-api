import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional().allow(null),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  profile: Joi.object().optional().allow(null),
  image: Joi.object().optional().allow(null),
});

userSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});

export { userSchema };
