import express from 'express'
import Controller from './controller.js'
const router = express.Router()

router.get('/',Controller.index)
router.get('/users',Controller.getAlluser)
router.get('/users/:id',Controller.getUserById)
router.post('/users',Controller.createUser)
router.put('/users/:id',Controller.editUserById)
router.delete('/users/:id',Controller.deleteUserById)

export default router