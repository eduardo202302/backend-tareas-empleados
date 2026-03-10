"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarea = exports.updateTarea = exports.getTareaById = exports.getTareasUsers = exports.getTableTareas = exports.createtaks = void 0;
const prisma_1 = require("../lib/prisma");
const createtaks = async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "El ID del usuario es requerido" });
    }
    const User = await prisma_1.prisma.user.findUnique({
        where: { id: Number(userId) },
    });
    if (!User) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const tieneTarea = await prisma_1.prisma.tarea.findFirst({
        where: { userId: User.id, completada: false },
    });
    if (tieneTarea) {
        return res.status(400).json({ error: "El usuario ya tiene una tarea asignada" });
    }
    try {
        const tarea = await prisma_1.prisma.tarea.create({
            data: {
                name: req.body.name,
                descripcion: req.body.descripcion,
                userId: User.id,
            },
        });
        res.json({ message: "Tarea creada correctamente", data: tarea });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la tarea" });
    }
};
exports.createtaks = createtaks;
const getTableTareas = async (req, res) => {
    try {
        const tareas = await prisma_1.prisma.tarea.findMany();
        res.json({ data: tareas });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
};
exports.getTableTareas = getTableTareas;
const getTareasUsers = async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ error: "El ID del usuario es requerido" });
    }
    const User = await prisma_1.prisma.user.findUnique({
        where: { id: Number(userId) },
    });
    if (!User) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }
    try {
        const tareas = await prisma_1.prisma.tarea.findMany({
            where: { userId: User.id },
        });
        res.json({ data: tareas });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
};
exports.getTareasUsers = getTareasUsers;
const getTareaById = async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await prisma_1.prisma.tarea.findUnique({
            where: { id: Number(id) },
        });
        if (!tarea) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }
        res.json({ data: tarea });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener la tarea" });
    }
};
exports.getTareaById = getTareaById;
const updateTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await prisma_1.prisma.tarea.update({
            where: { id: Number(id) },
            data: {
                name: req.body.name,
                descripcion: req.body.descripcion,
                completada: req.body.completada,
            },
        });
        if (tarea.completada) {
            await prisma_1.prisma.tarea.delete({
                where: { id: tarea.id },
            });
            return res.json({ message: "Tarea completada y eliminada correctamente" });
        }
        res.json({ message: "Tarea actualizada correctamente", data: tarea });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
};
exports.updateTarea = updateTarea;
const deleteTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await prisma_1.prisma.tarea.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Tarea eliminada correctamente", data: tarea });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};
exports.deleteTarea = deleteTarea;
//# sourceMappingURL=taksControllers.js.map