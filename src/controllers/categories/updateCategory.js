import { updateCategoryService } from "../../services/categories/updateCategory";

const updateCategoryControlller = async (req, res) => {
    const [status, data] = await updateCategoryService(req.validatedBody, req.params.id);

    return res.status(status).json(data);
}

export { updateCategoryControlller };