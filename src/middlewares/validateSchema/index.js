const validateSchemaMiddleware = (serializer) => async (req, res, next) => {
    try {
        const validated = await serializer.validate(req.body, {
            stripUnknown: true,
            abortEarly: false
        });
        req.validatedBody = validated;

        return next();
    } catch (error) {
        return res.status(400).json({ message: error.errors });
    }
};

const validateIdSchemaMiddleware = (serializer) => async (req, res, next) => {
    try {
        const validatedId = await serializer.validate(req.params);
  
        return next();
    } catch (error) {
        return res.status(404).json({ message: error.errors });
    }
}

export { validateSchemaMiddleware, validateIdSchemaMiddleware };