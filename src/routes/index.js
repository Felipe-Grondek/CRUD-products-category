import { Router } from "express";
import { verifyCategoryExistsByIdMiddleware, verifyCategoryExistsByNameMiddleware } from "../middlewares/categories/verifyCategoryExists";
import { listAllCategoriesController } from "../controllers/categories/listAllCaterories";
import { createCategoriesController } from "../controllers/categories/createCategories"
import { createProductsController } from "../controllers/products/createProducts";
import { validateIdSchemaMiddleware, validateSchemaMiddleware } from "../middlewares/validateSchema";
import { createProductsShape, productsIdShape, updateProductSchema } from "../schemas/products";
import { categoryIdShape, createCategoriesShape } from "../schemas/categories";
import { listAllProductsController } from "../controllers/products/listAllProducts";
import { listCategorieByIdController } from "../controllers/categories/listCategorieById";
import { updateCategoryControlller } from "../controllers/categories/updateCategory";
import { removeCategoryController } from "../controllers/categories/removeCategory";
import { verifyProductsExistsByIdMiddleware } from "../middlewares/products/verifyProductsExist";
import { listProductController } from "../controllers/products/listProductController";
import { removeProductController } from "../controllers/products/removeProductController";
import { updateProductController } from "../controllers/products/updateProduct";
import { listProductsByCategoryController } from "../controllers/products/listProductsByCategory";

const routes = Router();

routes.post("/categories", validateSchemaMiddleware(createCategoriesShape), verifyCategoryExistsByNameMiddleware, createCategoriesController);
routes.get("/categories", listAllCategoriesController);
routes.get("/categories/:id", validateIdSchemaMiddleware(categoryIdShape), verifyCategoryExistsByIdMiddleware, listCategorieByIdController);
routes.patch("/categories/:id", validateIdSchemaMiddleware(categoryIdShape), verifyCategoryExistsByIdMiddleware, validateSchemaMiddleware(createCategoriesShape), verifyCategoryExistsByNameMiddleware, updateCategoryControlller);
routes.delete("/categories/:id", validateIdSchemaMiddleware(categoryIdShape), verifyCategoryExistsByIdMiddleware, removeCategoryController)

routes.post("/products", validateSchemaMiddleware(createProductsShape), verifyCategoryExistsByIdMiddleware, createProductsController);
routes.get("/products", listAllProductsController);
routes.get("/products/:id", validateIdSchemaMiddleware(productsIdShape), verifyProductsExistsByIdMiddleware, listProductController);
routes.patch("/products/:id", validateIdSchemaMiddleware(productsIdShape), verifyProductsExistsByIdMiddleware, validateSchemaMiddleware(updateProductSchema), updateProductController);
routes.delete("/products/:id", validateIdSchemaMiddleware(productsIdShape), verifyProductsExistsByIdMiddleware, removeProductController);
routes.get("/products/category/:id", validateIdSchemaMiddleware(categoryIdShape), verifyCategoryExistsByIdMiddleware, listProductsByCategoryController);

export { routes };