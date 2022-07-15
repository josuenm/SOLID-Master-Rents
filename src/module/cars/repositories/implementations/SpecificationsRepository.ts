import { Specification } from "@module/cars/model/Specification";
import { ISpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";








class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[];
    
    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance() {
        if(!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE
    }


    create({ name, description }: ISpecificationsDTO) {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification);
    }

    findByName(name: string) {
        return this.specifications.find(specification => specification.name === name)
    }
}



export { SpecificationsRepository };