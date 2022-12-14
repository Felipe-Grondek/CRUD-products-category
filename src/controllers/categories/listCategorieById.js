import { listCategorieByIdService } from "../../services/categories/listCategorieById";

const listCategorieByIdController = async (req, res) => {
    const [status, data] = await listCategorieByIdService(req.params.id);

    return res.status(status).json(data);
};

export { listCategorieByIdController };