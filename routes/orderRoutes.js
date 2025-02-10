import Router from 'express';
import ordersController from '../controllers/ordersController.js';

const orderRouter = new Router();

orderRouter.post('/create', ordersController.createOrder);
orderRouter.get('/', ordersController.getOrders);


export default orderRouter;
