import { createCategoriesService } from "../../services/categories/createCategories";

const createCategoriesController = async (req, res) => {
    const [status, data] = await createCategoriesService(req.validatedBody);

    return res.status(status).json(data);
}

export { createCategoriesController };