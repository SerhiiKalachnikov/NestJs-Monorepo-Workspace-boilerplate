import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppUsePluginsService } from '@use/app-use-plugins';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const useService = app.get(AppUsePluginsService);
  useService.usePlugins(app, 'user-profile');
  await app.listen(process.env.USER_PROFILE_PORT || 3000);
}
bootstrap();
