import {Router} from 'express';
import { getProducts } from '../controllers/product.controller';

const router = Router()

router.get('/products', getProducts)
router.post('/products', postProducts)
router.put('/products', putProducts)
router.delete('/products', deleteProducts)
router.get('/products', getProduct)

export default router