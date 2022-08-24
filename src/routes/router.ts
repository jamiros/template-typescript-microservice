/** src/routes/posts.ts */
import express from 'express';
import controller from '../controllers/endpoints';
const router = express.Router();

router.get('/', controller.mainEndpoint);

export = router;