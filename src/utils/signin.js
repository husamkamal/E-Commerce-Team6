const Joi = require('joi');

const signingValidation = async (body) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required(),
    // eslint-disable-next-line prefer-regex-literals
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  });
  try {
    const value = await schema.validateAsync(body);
    return value;
  } catch (err) {
    return err;
  }
};

module.exports = signingValidation;
