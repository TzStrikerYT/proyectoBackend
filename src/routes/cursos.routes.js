import { Router } from 'express'


const router = Router()

router.post('/', createCursos)
router.get('/', getCursos)
router.get('/:productId', getCursosById)
router.put('/:producyId', updateCursos)
router.delete('/:productId', deleteCursos)

export default router

