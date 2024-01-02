import Message from '../model/message.model.js';

export const getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id });
        res.status(200).send(messages);
    } catch (err) {
        next(err);
    }
};