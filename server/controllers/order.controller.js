import Order from '../model/order.model.js';

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            isCompleted: true
        });

        res.status(200).send(orders);
    } catch (err) {
        next(err);
    }
};