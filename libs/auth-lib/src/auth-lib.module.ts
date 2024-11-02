import { DatabaseModule } from '@lib/database';
import { RedisModule } from '@lib/redis';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppUsePluginsModule } from '@use/app-use-plugins';

import { AuthLibService } from './auth-lib.service';
import { JwtStrategy } from './guards/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    PassportModule,
    AppUsePluginsModule,
    DatabaseModule,
    RedisModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthLibService, JwtStrategy],
  exports: [AuthLibService, JwtStrategy, JwtModule],
})
export class AuthLibModule {}
