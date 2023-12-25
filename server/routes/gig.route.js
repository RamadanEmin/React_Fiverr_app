import express from 'express';
import { createGig, getGig } from '../controllers/gig.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/single/:id', getGig);
router.post('/', verifyToken, createGig);

export default router;