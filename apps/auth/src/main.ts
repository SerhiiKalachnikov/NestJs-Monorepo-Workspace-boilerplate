export * from './auth.module';
export * from './auth.service';

import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { AppUsePluginsService } from '@use/app-use-plugins';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const useService = app.get(AppUsePluginsService);
  useService.usePlugins(app, 'auth');
  await app.listen(process.env.AUTH_PORT || 3000);
}
bootstrap();
