import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOne(email, pass);
    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { ...user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
