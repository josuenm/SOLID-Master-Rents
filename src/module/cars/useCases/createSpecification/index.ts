import {
    SpecificationsRepository
} from '@module/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';





const createSpecificationRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(createSpecificationRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);




export { createSpecificationController };