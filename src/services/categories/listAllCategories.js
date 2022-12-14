import database from "../../database";

const listAllCategoriesService = async () => {
    const queryResponse = await database
    .query(`
    SELECT * FROM Categories;
    `);

    return [200, queryResponse.rows];
};

export { listAllCategoriesService };