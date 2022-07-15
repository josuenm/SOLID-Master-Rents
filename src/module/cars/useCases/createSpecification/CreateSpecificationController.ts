import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";




class CreateSpecificationController {

    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}


    handle(request: Request, response: Response): void {
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description })

        response.status(201).send()
    }

}



export { CreateSpecificationController };