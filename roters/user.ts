import * as express from 'express';
import { UserControllers } from '../controllers/user';

export const userRoutes = express.Router();

const userControllers = new UserControllers();

userRoutes.get('/get-pizzas', userControllers.getPizzas);

userRoutes.patch('/order-create', userControllers.orderCreate);

userRoutes.get('/get-order/:id', userControllers.getOrder);
