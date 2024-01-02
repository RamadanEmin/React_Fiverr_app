import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getMessages } from '../controllers/message.controller.js';

const router = express.Router();

router.get('/:id', verifyToken, getMessages);

export default router;