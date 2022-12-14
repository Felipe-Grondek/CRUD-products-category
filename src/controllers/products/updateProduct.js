import { updateProductService } from "../../services/products/updateProduct";

const updateProductController = async (req, res) => {
    const [status, data] = await updateProductService(req.product, req.body, req.params.id);

    return res.status(status).json(data);
};

export { updateProductController };