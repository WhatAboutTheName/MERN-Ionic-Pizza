import * as express from 'express';
import { body } from 'express-validator/check';
import { AuthControllers } from '../controllers/auth';
import { UserModel } from '../models/user.model';

export const authRoutes = express.Router();

const authControllers = new AuthControllers();

authRoutes.put(
    '/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Invalid email')
            .custom(value => {
                return UserModel.findOne({email: value}).then(user => {
                    if (user) {
                        return Promise.reject('Email already exists');
                    }
                })
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({min: 6})
    ]
    ,authControllers.signup);

authRoutes.post('/login', authControllers.login);

authRoutes.put('/logout', authControllers.logout);
