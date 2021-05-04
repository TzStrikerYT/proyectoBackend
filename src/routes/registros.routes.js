import { Router } from 'express'


const router = Router()

router.post('/', createRegistros)
router.get('/', getRegistros)
router.get('/:productId', getRegistrosById)
router.put('/:producyId', updateRegistros)
router.delete('/:productId', deleteRegistros)

export default router