import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/common/dtos/signIn.dto';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Public()
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
