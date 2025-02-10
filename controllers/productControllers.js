class productControllers{
    async addProduct(req, res){
        try{
            const {name, price} = req.body;
            const product = await Product.create({name, price});
            return res.json(product);

        }catch(e){
            console.log(e);
        }
        
    }
    async updateProduct(req, res){
        try{
            const {id} = req.params;
            const {name, price} = req.body;
            const product = await Product.findByIdAndUpdate (id, {name, price}, {new: true});   
            return res.json(product);   
        }catch(e){
            console.log(e); 
        }

}

export default new productControllers();
