import * as yup from "yup";

const createProductsShape = yup.object().shape({
    name: yup.string().max(200).required(),
    price: yup.number().required().test("is-decimal", "invalid decimal", (value) => (value + "").match(/^(\d+(?:,\d{1,2})?).*/)),
    category_id: yup.number().integer()
});

const productsIdShape = yup.object().shape({
    id: yup.string().uuid(),
});

const updateProductSchema = yup.object().shape({
    name: yup.string().max(200),
    price: yup.string().matches(/^(\d+(?:,\d{1,2})?).*/),
    category_id: yup.number().integer()
});

export { createProductsShape, productsIdShape, updateProductSchema };
