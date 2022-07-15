import { Category } from "@module/cars/model/Category";
import { ICategoriesRepository } from "@module/cars/repositories/ICategoriesRepository";



class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list()

        return categories;
    }
}


export { ListCategoriesUseCase };