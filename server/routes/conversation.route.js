import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getConversations } from '../controllers/conversation.controller.js';

const router = express.Router();

router.get('/', verifyToken, getConversations);

export default router;