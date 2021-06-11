import { Router } from 'express'
import { createNewVehicles, getVehicles } from '../controllers/vehicles.controllers'

const router = Router()

router.get('/vehicles', getVehicles);

router.post('/vehicles', createNewVehicles);

router.get('/vehicles', )

router.delete('/vehicles', )

router.put('/vehicles', )




export default router