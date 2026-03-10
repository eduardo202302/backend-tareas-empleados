import express from 'express';
import config from './config/config';
import { corsMiddleware } from './middlewares/cors';
import { errorHandler, notFound } from './middlewares/errorHandler';
import { loggerMiddleware } from './middlewares/logger';
import usuarioRoutes from './routes/usuarioRoutes';
import tasksRoutes from './routes/tasksRoutes';

const app = express()
const port = config.puerto;

app.use(corsMiddleware);
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user', usuarioRoutes);
app.use('/tareas', tasksRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
