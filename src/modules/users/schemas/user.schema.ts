import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  profile: Joi.object().required(),
  image: Joi.object().allow(null),
});

userSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});

export { userSchema };
