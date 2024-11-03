import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class SwaggerBasicAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      res.setHeader('WWW-Authenticate', 'Basic');
      throw new UnauthorizedException('Missing Authorization Header');
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    // Replace these with your actual admin credentials
    const adminUsername = process.env.SWAGGER_USERNAME || 'admin';
    const adminPassword = process.env.SWAGGER_PASSWORD || 'admin';

    if (username === adminUsername && password === adminPassword) {
      next();
    } else {
      res.setHeader('WWW-Authenticate', 'Basic');
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
