import { Router } from 'express';
import { createSpecificationController } from '@module/cars/useCases/createSpecification';




const router = Router();


router.post('/create', (request, response) => {
    return createSpecificationController.handle(request, response);
})




export default router;