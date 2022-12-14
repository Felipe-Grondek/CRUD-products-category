import database from "../../database";

const createProductsService = async (payload) => {
    const queryResponse = await database.query(
        `INSERT INTO
            products(name, price, category_id)
        VALUES
            ($1, $2, $3)
        RETURNING *;`,
        [payload.name, payload.price, payload.category_id]
    );

    return [201, queryResponse.rows[0]];
}

export { createProductsService };