"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
const notFound = (req, res) => {
    res.status(404).json({
        ok: false,
        mensaje: `Ruta ${req.originalUrl} no encontrada`,
    });
};
exports.notFound = notFound;
const errorHandler = (error, req, res, next) => {
    if (res.headersSent)
        return next(error);
    const status = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(status).json({
        ok: false,
        mensaje: error.message || "Error interno del servidor",
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map