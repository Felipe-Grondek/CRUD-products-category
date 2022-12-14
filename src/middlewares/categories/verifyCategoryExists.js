import database from "../../database";
import { AppError } from "../../errors";

const verifyCategoryExistsByNameMiddleware = async (req, res, next) => {
    const categorieExist = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            name = $1`,
        [req.validatedBody.name]
    );

    if (categorieExist.rows[0]) {
        throw new AppError("category already exists.", 400);
    }

    return next();
}

const verifyCategoryExistsByIdMiddleware = async (req, res, next) => {
    const categorieExist = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            id = $1`,
        req.params.id ? [req.params.id] : [req.validatedBody.category_id]
    );

    if (!categorieExist.rows[0]) {
        throw new AppError("Category not found.", 404);
    }

    return next();
}

export { verifyCategoryExistsByNameMiddleware, verifyCategoryExistsByIdMiddleware };