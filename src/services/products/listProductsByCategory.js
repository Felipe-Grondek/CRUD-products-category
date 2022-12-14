import database from "../../database";

const listProductsByCategoryService = async (id) => {
    const queryParams = await database.query(
        `SELECT 
        p.name,
        p.price,
        c.name AS category
        FROM 
            products p
        JOIN 
            categories c
        ON 
            c.id = p.category_id
        WHERE 
            c.id = $1;`,
        [id]
    );

    return [200, queryParams.rows]
};

export { listProductsByCategoryService };