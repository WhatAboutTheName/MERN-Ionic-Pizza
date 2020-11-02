import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const Schema = mongoose.Schema;

export interface IUserModel extends IUser, mongoose.Document {
  addToOrder(
    userId: mongoose.Schema.Types.ObjectId,
    prodData: [{ prodId: string, prodQuantity: number }],
    orderId?: mongoose.Schema.Types.ObjectId
  ): IUser;
  isLoginChange(flag: boolean): IUser;
}

const userSchema: mongoose.Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true,
    default: false
  },
  isLogin: {
    type: Boolean,
    required: true,
    default: false
  },
  order: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      prodData: [
        {
          prodId: {
            type: Schema.Types.ObjectId,
            required: true
          },
          prodQuantity: {
            type: Number,
            required: true
          }
        }
      ],
      orderId: {
        type: Schema.Types.ObjectId,
        required: false
      }
    }
  ]
},
  {
    versionKey: false
  }
);

userSchema.methods.addToOrder = function (
  userId: string,
  prodData: [{ prodId: string, prodQuantity: number }],
  orderId: string
) {
  const newOrder = [...this.order];
  newOrder.push({ userId: userId, prodData: prodData, orderId: orderId });
  this.order = newOrder;
  return this.save();
}

userSchema.methods.isLoginChange = function (flag: boolean) {
  this.isLogin = flag;
  return this.save();
};

export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);
