import { AuthLibModule } from '@lib/auth-lib';
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@lib/database';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthLibModule, DatabaseModule, ConfigModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
