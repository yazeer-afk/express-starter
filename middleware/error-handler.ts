import { NextFunction, Request, Response } from "express";
import {CustomAPIError} from '../errors/custom-error'


export const errorHandlerMiddleware = async(err: Error, req: Request, res: Response, next:NextFunction):Promise<Response> => {
    
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json('Something went wrong. Please try again later!')
}