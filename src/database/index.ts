import { DataSource } from "typeorm";


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "master-rents",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
.then(() => console.log('Postgres is running ✅'))
.catch((err) => console.error(err))


export default AppDataSource;