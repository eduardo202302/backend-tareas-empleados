import { Router } from 'express';
import { createtaks, getTableTareas, getTareasUsers, updateTarea, deleteTarea, getTareaById } from '../controllers/taksControllers';

const router = Router();

router.post('/', createtaks);
router.get('/', getTableTareas);
router.get('/byUser/:userId', getTareasUsers);  
router.get('/:id', getTareaById);              
router.patch('/:id', updateTarea);
router.delete('/:id', deleteTarea);


export default router;