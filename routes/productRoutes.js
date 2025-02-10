import Router from 'express';
import productControllers from '../controllers/productControllers.js';
const productRouter = new Router();

productRouter.post('/add', productControllers.addProduct);
productRouter.put('/update/:id', productControllers.updateProduct);


export default productRouter;