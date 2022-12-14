import { removeProductService } from "../../services/products/removeProduct";

const removeProductController = async (req, res) => {
    const [status, data] = await removeProductService(req.params.id);

    return res.status(status).json(data);
};

export { removeProductController };