import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getConversations, getSingleConversation } from '../controllers/conversation.controller.js';

const router = express.Router();

router.get('/', verifyToken, getConversations);
router.get('/single/:id', verifyToken, getSingleConversation);

export default router;