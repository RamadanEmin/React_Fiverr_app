import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createConversations, getConversations, getSingleConversation } from '../controllers/conversation.controller.js';

const router = express.Router();

router.get('/', verifyToken, getConversations);
router.get('/single/:id', verifyToken, getSingleConversation);
router.post('/', verifyToken, createConversations);

export default router;