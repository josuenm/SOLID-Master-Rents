



interface ISpecificationsDTO {
    name: string;
    description: string;
}




interface ISpecificationsRepository {
    create({ name, description }: ISpecificationsDTO): void;
    findByName(name: string): ISpecificationsDTO;
}




export { ISpecificationsRepository, ISpecificationsDTO };