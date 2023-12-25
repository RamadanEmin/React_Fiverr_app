import Gig from '../model/gig.model.js';
import createError from "../utils/createError.js";

export const getGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);

        if (!gig) {
            return next(createError(404, 'Gig not found!'));
        }

        res.status(200).send(gig);
    } catch (err) {
        next(err);
    }
};

export const createGig = async (req, res, next) => {
    if (!req.isSeller) {
        return next(createError(403, 'Only sellers can create a gig!'));
    }

    const newGig = new Gig({
        userId: req.userId,
        ...req.body
    });

    try {
        const savedGig = await newGig.save();
        res.status(201).json(savedGig);
    } catch (err) {
        next(err);
    }
};