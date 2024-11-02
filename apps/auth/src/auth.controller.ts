import { JwtAuthGuard, Role, Roles, RolesGuard } from '@lib/auth-lib';
import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDTO, RefreshDTO } from './dto';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDTO) {
    const { email, password } = body;
    return this.authService.login(email, password);
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  async refresh(@Req() req, @Body() body: RefreshDTO) {
    const { refreshToken } = body;
    return this.authService.refresh(req.user.userId, refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Req() req) {
    await this.authService.revokeRefreshToken(req.user.userId);
    return { message: 'Logged out' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('user')
  getUser(@Request() req) {
    return req.user;
  }
}
