import database from "../../database";

const listAllProductsService = async () => {
    const queryResponse = await database.query(
        `SELECT * FROM products;`
    );

    return [200, queryResponse.rows];
};

export { listAllProductsService };