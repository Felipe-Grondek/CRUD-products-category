import { listAllCategoriesService } from "../../services/categories/listAllCategories";

const listAllCategoriesController = async (req, res) => {
    const [status, data] = await listAllCategoriesService();

    return res.status(status).json(data)
}

export { listAllCategoriesController };