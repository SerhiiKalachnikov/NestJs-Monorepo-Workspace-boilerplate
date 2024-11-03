import { INestApplication, Injectable, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import helmet from 'helmet';

import { AllExceptionsFilter } from './all-exception.filter';
import { SwaggerBasicAuthMiddleware } from './swagger.middleware';

@Injectable()
export class AppUsePluginsService {
  public usePlugins(app: INestApplication, serverName: string) {
    this.enableCors(app);
    this.useDocumentation(app, serverName);
    this.useMiddlewares(app);
    this.useGlobalHooks(app, serverName);
    this.useFavicon(app);
  }

  private enableCors = (app: INestApplication) => {
    app.enableCors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE', 'PATCH'],
      allowedHeaders: [
        'Accept',
        'Authorization',
        'Content-Disposition',
        'Content-Type',
        'Origin',
        'X-Requested-With',
      ],
      exposedHeaders: ['Content-Disposition', 'Authorization'],
    });
  };

  private useDocumentation = (app: INestApplication, serverName: string) => {
    const options = new DocumentBuilder()
      .setTitle('Mobile app')
      .setDescription('The mobile app API')
      .setVersion('1.0')
      .addServer(serverName)
      .addBearerAuth()
      .addSecurityRequirements('bearer')
      .build();

    app.use('/api/docs', new SwaggerBasicAuthMiddleware().use);

    const document = SwaggerModule.createDocument(app, options, {
      ignoreGlobalPrefix: true,
    });
    SwaggerModule.setup('/api/docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  };

  private useMiddlewares = (app: INestApplication) => {
    app.use(cookieParser());
    app.use(helmet());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
  };

  private useGlobalHooks = (app: INestApplication, serverName) => {
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new AllExceptionsFilter());
    app.enableShutdownHooks();
    app.setGlobalPrefix(`api/${serverName}`, {
      exclude: ['', 'api/docs'],
    });
  };

  private useFavicon = (app: INestApplication) => {
    // app.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico')));
  };
}
