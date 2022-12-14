import database from "../../database"

const removeCategoryService = async (id) => {
    const queryResponse = database.query(
        `DELETE FROM
            categories
        WHERE
            id = $1`,
        [id]
    );

    return [204, {}];
};

export { removeCategoryService };