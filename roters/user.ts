import * as express from 'express';
import { UserControllers } from '../controllers/user';
import { checkAuth } from '../route-protector/auth';

export const userRoutes = express.Router();

const userControllers = new UserControllers();

userRoutes.get('/get-pizzas', checkAuth, userControllers.getPizzas);

userRoutes.patch('/order-create', checkAuth, userControllers.orderCreate);

userRoutes.get('/get-order/:id', checkAuth, userControllers.getOrder);
