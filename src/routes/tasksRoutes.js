"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taksControllers_1 = require("../controllers/taksControllers");
const router = (0, express_1.Router)();
router.post('/', taksControllers_1.createtaks);
router.get('/', taksControllers_1.getTableTareas);
router.get('/byUser/:userId', taksControllers_1.getTareasUsers);
router.get('/:id', taksControllers_1.getTareaById);
router.patch('/:id', taksControllers_1.updateTarea);
router.delete('/:id', taksControllers_1.deleteTarea);
exports.default = router;
//# sourceMappingURL=tasksRoutes.js.map