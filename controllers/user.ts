import { PizzaModel } from '../models/pizza.model';
import { UserModel, IUserModel } from '../models/user.model';
import { Request, Response, NextFunction} from 'express';

export class UserControllers {

  async getPizzas (req: Request, res: Response, next: NextFunction) {
    try {
      const pizzas = await PizzaModel.find();
      res.status(200).json({
        message: 'Fetched pizzas successfully.',
        product: pizzas
      });
    } catch(err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  
  async orderCreate (req: Request, res: Response, next: NextFunction) {
    const userId = req.body.userId;
    const prodData = req.body.prodData;
    try {
      const admin: IUserModel | null = await UserModel.findOne({admin: true});
      const user: IUserModel | null = await UserModel.findById(userId);
      user?.addToOrder(userId, prodData);
      const orderId = await user?.order[user?.order.length - 1]._id;
      admin?.addToOrder(userId, prodData, orderId);
      res.status(200).json({message: 'Order create!'});
    } catch(err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  
  async getOrder (req: Request, res: Response, next: NextFunction) {
    try {
      const person: IUserModel | null = await UserModel.findById(req.query.id);
      console.log(person, 'It is getOrder');
      res.status(200).json({message: 'Get order!'});
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
}
