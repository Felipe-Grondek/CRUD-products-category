import * as yup from "yup";

const createCategoriesShape = yup.object().shape({
    name: yup.string().max(200).required()
});

const categoryIdShape = yup.object().shape({
    id: yup.string().required().matches(/^\d+$/, {message: "id must be a integer number"}),
});

export { createCategoriesShape, categoryIdShape };