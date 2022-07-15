import multer from "multer";
import { Router } from "express";
import { createCategoryController } from "@module/cars/useCases/createCategory";
import { listCategoriesController } from "@module/cars/useCases/listCategories";
import { importCategoryController } from "@module/cars/useCases/importCategory";


const router = Router();


const upload = multer({
    dest: './tmp'
});


router.post('/create', (request, response) => {
    return createCategoryController.handle(request, response);
});


router.get('/list', (request, response) => {
    return listCategoriesController.handle(request, response);
});


router.post('/import', upload.single('file'), (request, response) => {
    return importCategoryController.handle(request, response);
});


export default router;