import Order from '../models/Order.js';

class ordersController{
    async createOrder(req, res){
        try{
            const {userId, products} = req.body;
            const order = await Order.create({userId, products});
            return res.json(order); 
        }catch(e){
            console.log(e);
        }
    }
    async getOrders(req, res){
        try{
            const orders = await Order.find();
            return res.json(orders);
        }catch(e){
            console.log(e);
        }
    }
}

export default new ordersController();
