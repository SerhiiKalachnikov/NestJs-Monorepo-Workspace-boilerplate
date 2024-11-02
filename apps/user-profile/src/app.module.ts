import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUsePluginsModule } from '@use/app-use-plugins';
import { AuthLibModule } from '@lib/auth-lib';

@Module({
  imports: [AppUsePluginsModule, AuthLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
