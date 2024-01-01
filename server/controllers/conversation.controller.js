import Conversation from '../model/conversation.model.js';
import createError from '../utils/createError.js';

export const getConversations = async (req, res, next) => {
    try {
        const conversations = await Conversation
            .find(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId })
            .sort({ updatedAt: -1 });

        res.status(200).send(conversations);
    } catch (err) {
        next(err);
    }
};

export const getSingleConversation = async (req, res, next) => {
    try {
        const conversation = await Conversation.findOne({ id: req.params.id });

        if (!conversation) {
            return next(createError(404, 'Not found!'));
        }

        res.status(200).send(conversation);
    } catch (err) {
        next(err);
    }
};