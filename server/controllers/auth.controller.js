import User from '../model/user.model.js';
import bcrypt from 'bcrypt';

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);

        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save();
        res.status(201).send('User has been created!');
    } catch (err) {
        next(err);
    }
};