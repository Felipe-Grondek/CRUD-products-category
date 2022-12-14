import { listProductsByCategoryService } from "../../services/products/listProductsByCategory";

const listProductsByCategoryController = async (req, res) => {
    const [status, data] = await listProductsByCategoryService(req.params.id);

    return res.status(status).json(data);
};

export { listProductsByCategoryController };