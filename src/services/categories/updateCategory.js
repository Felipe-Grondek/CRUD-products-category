import database from "../../database"

const updateCategoryService = async (payload, id) => {
    const queryResponse = await database.query(
        `UPDATE
            categories
        SET
            name = $1
        WHERE
            id = $2
        RETURNING *;`,
        [payload.name, id]
    );

    return [200, queryResponse.rows[0]];
}

export { updateCategoryService };