import { listProductService } from "../../services/products/listProductService";

const listProductController = (req, res) => {
    const [status, data] = listProductService(req.product);

    return res.status(status).json(data);
};

export { listProductController };