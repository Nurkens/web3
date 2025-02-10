import Router from 'express';
import usersControllers from '../controllers/usersControllers';

const router = new Router();

router.post('/register', usersControllers.register);

export default router;