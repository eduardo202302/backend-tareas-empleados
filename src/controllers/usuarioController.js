"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.getUsuarioById = exports.getUsuarios = exports.createUsuario = void 0;
const prisma_1 = require("../lib/prisma");
const createUsuario = async (req, res) => {
    try {
        const user = await prisma_1.prisma.user.create({
            data: {
                name: req.body.name,
                sueldo: req.body.sueldo,
                cumpleaños: req.body.cumpleaños,
                direccion: req.body.direccion,
                cedula: req.body.cedula,
                email: req.body.email,
                telefono: req.body.telefono,
            },
        });
        res.json({ message: "Usuario creado correctamente", data: user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
};
exports.createUsuario = createUsuario;
const getUsuarios = async (req, res) => {
    try {
        const users = await prisma_1.prisma.user.findMany();
        res.json({ message: "Usuarios obtenidos correctamente", data: users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};
exports.getUsuarios = getUsuarios;
const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: Number(id) },
        });
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json({ message: "Usuario encontrado", data: user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
};
exports.getUsuarioById = getUsuarioById;
const updateUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma_1.prisma.user.update({
            where: { id: Number(id) },
            data: {
                name: req.body.name,
                email: req.body.email,
                telefono: req.body.telefono,
                cedula: req.body.cedula,
                sueldo: req.body.sueldo,
                direccion: req.body.direccion,
                cumpleaños: req.body.cumpleaños,
            },
        });
        res.json({ message: "Usuario actualizado correctamente", data: user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
};
exports.updateUsuario = updateUsuario;
const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma_1.prisma.user.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Usuario eliminado correctamente", data: true });
    }
    catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        console.log(error);
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioController.js.map