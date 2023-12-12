import { Router } from 'express';
import userRouter from './users.js';
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send(`<h1>hello world this is praveen</h1>`)
})
router.use('/user', userRouter)

export default router