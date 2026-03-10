"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const cors_1 = require("./middlewares/cors");
const errorHandler_1 = require("./middlewares/errorHandler");
const logger_1 = require("./middlewares/logger");
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const tasksRoutes_1 = __importDefault(require("./routes/tasksRoutes"));
const app = (0, express_1.default)();
const port = config_1.default.puerto;
app.use(cors_1.corsMiddleware);
app.use(logger_1.loggerMiddleware);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', usuarioRoutes_1.default);
app.use('/tareas', tasksRoutes_1.default);
app.use(errorHandler_1.notFound);
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map