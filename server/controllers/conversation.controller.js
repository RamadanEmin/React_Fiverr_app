import Conversation from '../model/conversation.model.js';

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