import { Router } from 'express';
import userController from '../controllers/UserController'; 

const router = new Router();

router.post('/', userController.store);

export default router;