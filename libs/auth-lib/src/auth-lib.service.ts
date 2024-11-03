import { UsersRepo } from '@lib/database';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { RedisAuthService } from 'libs/redis/src';

@Injectable()
export class AuthLibService {
  private readonly JWT_REFRESH_EXPIRATION: string;
  private readonly JWT_EXPIRATION: string;

  constructor(
    private readonly jwtService: JwtService,
    private readonly redisAuthService: RedisAuthService,
    private readonly usersRepository: UsersRepo,
    private readonly configService: ConfigService,
  ) {
    this.JWT_REFRESH_EXPIRATION = this.configService.get<string>('JWT_REFRESH_EXPIRATION');
    this.JWT_EXPIRATION = this.configService.get<string>('JWT_EXPIRATION');
  }

  async login(email: string, pass: string) {
    const userFromDB = await this.usersRepository.findByEmail(email);
    if (!userFromDB) throw new Error('User not found');

    const payload = {
      sub: userFromDB._id.toString(),
      role: userFromDB.role,
    };

    const isPasswordValid = await bcrypt.compare(pass, userFromDB.password);
    if (!isPasswordValid) throw new Error('Invalid password');

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_EXPIRATION,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_REFRESH_EXPIRATION,
    });

    const fullPayload = this.jwtService.decode(accessToken);
    await this.redisAuthService.setRefreshToken(payload.sub, refreshToken, fullPayload.exp);
    return {
      accessToken,
      refreshToken,
    };
  }

  async refresh(userId: string, refreshToken: string) {
    const storedToken = await this.redisAuthService.getRefreshToken(userId);
    if (storedToken !== refreshToken) throw new Error('Invalid refresh token');

    const user = await this.usersRepository.findById(userId);
    const payload = { sub: userId, role: user.role };

    const newAccessToken = this.jwtService.sign(payload);
    const newRefreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_EXPIRATION,
    });
    const fullPayload = this.jwtService.decode(newAccessToken);
    await this.redisAuthService.setRefreshToken(userId, newRefreshToken, fullPayload.exp);
    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }

  async revokeRefreshToken(userId: string) {
    await this.redisAuthService.deleteRefreshToken(userId);
  }
}
