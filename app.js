import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

const app  = express();

dotenv.config();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);




async function startApp(){
    try{
        await mongoose.connect(process.env.DB_URL);
        app.listen(process.env.PORT, () => console.log('Server started on port ' + process.env.PORT));
    }catch(e){
        console.log(e);
    }

}

startApp();
