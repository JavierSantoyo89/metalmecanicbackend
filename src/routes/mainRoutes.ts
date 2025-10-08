import express from 'express'
import mainController from '../controller/mainController'
const router: express.Router = express.Router()

router.get('/', mainController.index)
router.get('/statistics', mainController.statistics)
router.get('/login', mainController.login)
router.get('/dashboard', mainController.dashboard)
router.get('/profile', mainController.profile)

export default router