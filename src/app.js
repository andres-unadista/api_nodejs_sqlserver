import express from 'express'
import config from './config';
import productsRoutes from './routes/product.routes';

const app = express();

// settings
app.set('port', config.port || 2000)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(productsRoutes)

export default app