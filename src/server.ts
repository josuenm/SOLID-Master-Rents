import express from 'express';
import routes from '@routes/routes'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes)

app.listen(8080, () => console.log('Server is running ✅'))