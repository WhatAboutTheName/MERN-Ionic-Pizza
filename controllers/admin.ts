import { PizzaModel } from '../models/pizza.model';
import { Request, Response, NextFunction } from 'express';

export class AdminControllers {

  async createPizza(req: Request, res: Response, next: NextFunction) {
    const image = req.protocol + "://" + req.get("host");
    const title = req.body.title;
    const price = req.body.price;
    try {
      const product = new PizzaModel({
        title: title,
        price: price,
        image: image + "/images/" + req['file'].filename
      });
      const prod = await product.save();
      res.status(201).json({message: "Post added successfully"});
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }

  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('getAllOrders getAllOrders getAllOrders');
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
}
