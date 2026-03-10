import { Request, Response } from "express";
export declare const createUsuario: (req: Request, res: Response) => Promise<void>;
export declare const getUsuarios: (req: Request, res: Response) => Promise<void>;
export declare const getUsuarioById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUsuario: (req: Request, res: Response) => Promise<void>;
export declare const deleteUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=usuarioController.d.ts.map