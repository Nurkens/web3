import Router from 'express';
import usersControllers from '../controllers/usersControllers.js';

const userRouter = new Router();

userRouter.post('/register', usersControllers.register);

export default userRouter;
