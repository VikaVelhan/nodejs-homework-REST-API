const updateContactValidation = (schema) => {
  const valid = (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (Object.keys(value).length === 0 || !Object) {
      return res.status(400).json({ message: "missing field" });
    }
    next(error);
  };
  return valid;
};

module.exports = updateContactValidation;
