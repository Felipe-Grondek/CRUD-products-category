import database from "../../database";
import { AppError } from "../../errors";

const verifyProductsExistsByIdMiddleware = async (req, res, next) => {
    const queryResponse = await database.query(
        `SELECT 
            *
        FROM 
            products
        WHERE
            id = $1;`,
        [req.params.id]
    );

    if(!queryResponse.rows[0]) {
        throw new AppError("Product not found.", 404);
    }

    req.product = queryResponse.rows[0];

    return next();
};

export { verifyProductsExistsByIdMiddleware };