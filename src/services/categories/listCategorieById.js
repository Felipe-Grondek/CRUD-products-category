import database from "../../database";

const listCategorieByIdService = async (id) => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            id = $1`,
        [id]
    );

    return [200, queryResponse.rows[0]];
};

export { listCategorieByIdService };