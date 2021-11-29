import {Router} from 'express';
import { countProducts, deleteProduct, getProduct, getProducts, saveProducts, updateProduct } from '../controllers/product.controller';

const router = Router()

router.get('/products', getProducts)
router.get('/products/count', countProducts)
router.post('/products', saveProducts)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)
router.get('/products/:id', getProduct)

export default router