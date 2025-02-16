import Product from '../models/Product.js';
class productControllers{
    async addProduct(req, res){
        try{
            const {name, price,category,stock} = req.body;
            const product = await Product.create({name, price,category,stock});
            return res.json(product);

        }catch(e){
            console.log(e);
        }
        
    }
    async updateProduct(req, res){
        try{
            const {id} = req.params;
            const {name, price,category,stock} = req.body;
            const product = await Product.findByIdAndUpdate (id, {name, price,category,stock}, {new: true});   
            return res.json(product);   
        }catch(e){
            console.log(e); 
        }
    }
}

export default new productControllers();
