import { Request, Response } from "express";
declare const createtaks: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const getTableTareas: (req: Request, res: Response) => Promise<void>;
declare const getTareasUsers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const getTareaById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updateTarea: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deleteTarea: (req: Request, res: Response) => Promise<void>;
export { createtaks, getTableTareas, getTareasUsers, getTareaById, updateTarea, deleteTarea };
//# sourceMappingURL=taksControllers.d.ts.map