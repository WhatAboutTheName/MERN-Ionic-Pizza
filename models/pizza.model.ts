import * as mongoose from 'mongoose';
import { IPizza } from '../interfaces/pizza.interface';

export interface IPizzaModel extends IPizza, mongoose.Document {}

const Schema = mongoose.Schema;

const pizzaSchema: mongoose.Schema = new Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    }
});

export const PizzaModel: mongoose.Model<IPizzaModel> = mongoose.model<IPizzaModel>('Product', pizzaSchema);