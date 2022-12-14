import database from "../../database";

const removeProductService = async (id) => {
    const queryResponse = database.query(
        `DELETE FROM
            products
        WHERE
            id = $1;`,
        [id]
    );

    return [204, {}];
};

export { removeProductService };