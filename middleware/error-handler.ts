import { NextFunction, Request, Response } from "express";


export const errorHandlerMiddleware = async(err: Error, req: Request, res: Response, next:NextFunction):Promise<Response> => {
    console.error(err)
    return res.status(500).json('Something went wrong. Please try again later!')
}