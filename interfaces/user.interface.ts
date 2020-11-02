import * as mongoose from 'mongoose';

export interface IUser {
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
  admin: boolean,
  isLogin: boolean,
  order: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      userId: string,
      prodData: [{
        prodId: string,
        prodQuantity: number
      }],
      orderId?: string
    }
  ]
}