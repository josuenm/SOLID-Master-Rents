import express from 'express';
import CategoriesRouter from '@routes/categories.routes';
import SpecificationsRouter from '@routes/specifications.routes';


const router = express.Router();


router.use('/categories', CategoriesRouter)
router.use('/specifications', SpecificationsRouter)



export default router;