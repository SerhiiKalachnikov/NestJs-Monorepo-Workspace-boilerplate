import { Module } from '@nestjs/common';
import { AppUsePluginsService } from './app-use-plugins.service';

@Module({
  providers: [AppUsePluginsService],
  exports: [AppUsePluginsService],
})
export class AppUsePluginsModule {}
