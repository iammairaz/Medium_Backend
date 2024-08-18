import { NextFunction,Request,Response } from 'express';
import jwt from'jsonwebtoken';
import config from "../Config/index";

interface JwtPayload {
  userId: string;
}

const authenticateToken = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, config.JWTSECRETTOKEN, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.headers['x-user-id'] = (user as JwtPayload).userId;
    next();
  });
};

export default {
    authenticateToken
}