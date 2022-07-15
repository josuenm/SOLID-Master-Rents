import { 
    ICategoriesRepository 
} from '@module/cars/repositories/ICategoriesRepository';
import { parse } from 'csv-parse';
import fs from 'fs';


interface IImportCategory {
    name: string;
    description: string;
}


class ImportCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const categories: IImportCategory[] = [];

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile.on('data', async (line: string) => {
                const [name, description] = line;

                categories.push({
                    name,
                    description
                })
            })
            .on('end', () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on('error', (err) => reject(err))
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.forEach((category) => {
            const { name, description } = category;

            const categoryExist = this.categoriesRepository.findByName(name);

            if(!categoryExist) {
                this.categoriesRepository.create({ name, description })
            }
        })
    }
};


export { ImportCategoryUseCase };