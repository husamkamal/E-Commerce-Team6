const Joi = require('joi');

const signinValidation = async () => {
  const schema = Joi.object({
    firesName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    // eslint-disable-next-line prefer-regex-literals
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  try {
    const value = await schema.validateAsync({
      username: 'abc',
      birth_year: 1994,
    });
    return value;
  } catch (err) {
    return err;
  }
};

module.exports = signinValidation;
