import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    ok: false,
    mensaje: `Ruta ${req.originalUrl} no encontrada`,
  });
};

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) return next(error); 

  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status).json({
    ok: false,
    mensaje: error.message || "Error interno del servidor",
  });
};