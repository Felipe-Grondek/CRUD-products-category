import { createProductsService } from "../../services/products/createProducts";

const createProductsController = async (req, res) => {
    const [status, data] = await createProductsService(req.validatedBody);

    return res.status(status).json(data);
};

export { createProductsController };