import Review from '../model/review.model.js';
import Gig from '../model/gig.model.js';
import createError from '../utils/createError.js';

export const createReview = async (req, res, next) => {
    if (req.isSeller) {
        return next(createError(403, 'Seller can\'t create a review!'));
    }

    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        star: req.body.star
    });

    try {
        const review = await Review.findOne({ gigId: req.body.gigId, userId: req.userId });

        if (review) {
            return next(createError(403, 'You have already created a review for this gig!'));
        }

        await Gig.findByIdAndUpdate(req.body.gigId, { $inc: { totalStars: req.body.star, starNumber: 1 } });

        const savedReview = await newReview.save();
        res.status(201).send(savedReview);
    } catch (err) {
        next(err);
    }
}