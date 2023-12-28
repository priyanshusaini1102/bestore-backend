// auth.controller.ts

import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    // test pr comment
    return this.authService.login(req.user);
  }

  @Get()
  async helloAuth() {
    return 'auth';
  }
}
