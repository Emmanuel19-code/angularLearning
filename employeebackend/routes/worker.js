import express from 'express'
import { RegisterWorkers } from '../controllers/registerWorker.js'
import { GetAllWorkers } from '../controllers/selectWorkers.js'

const router = express.Router()


router.post('/register_worker',RegisterWorkers)
router.get('/all_workers',GetAllWorkers)


export default router