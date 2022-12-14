import { listAllProductsService } from "../../services/products/listAllProducts";

const listAllProductsController = async (req, res) => {
    const [status, data] = await listAllProductsService();

    return res.status(status).json(data);
};

export { listAllProductsController };