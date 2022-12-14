import { removeCategoryService } from "../../services/categories/removeCategory";

const removeCategoryController = async (req, res) => {
    const [status, data] = await removeCategoryService(req.params.id);

    return res.status(status).json(data);
};

export { removeCategoryController };