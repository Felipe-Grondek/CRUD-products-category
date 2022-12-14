import database from "../../database";

const updateProductService = async (product, payload, id) => {
    const updatedProduct = Object.assign(product, payload);

    const queryResponse = await database.query(
        `UPDATE
            products
        SET
            name = $1,
            price = $2,
            category_id = $3
        WHERE
            id = $4
        RETURNING *;`,
        [updatedProduct.name, updatedProduct.price, updatedProduct.category_id, id]
    );

    return [200, queryResponse.rows[0]];
};

export { updateProductService };