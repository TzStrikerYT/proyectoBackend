import { Router } from 'express'


const router = Router()

router.post('/', createNoticias)
router.get('/', getNoticias)
router.get('/:productId', getNoticiasById)
router.put('/:producyId', updateNoticias)
router.delete('/:productId', deleteNoticias)

export default router