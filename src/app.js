import express from 'express'
import config from './config';
import productsRoutes from './routes/product.routes';

const app = express();

app.set('port', config.port || 2000)
app.use(productsRoutes)

export default app