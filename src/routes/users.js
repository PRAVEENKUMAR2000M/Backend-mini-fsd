import { Router } from "express";
import userControllers from '../controllers/users.js'
const router = Router();


router.get('/', userControllers.getAlluser);
router.get('/:id',userControllers.getUserByid)
router.post('/', userControllers.createUser);
router.put('/:id', userControllers.editUserByid);
router.delete('/:id', userControllers.deleteUserByid);

// router.get('/data', (req, res) => {
//     res.status(200).send(`<h1>nodejs</h1>`)
// })
export default router;