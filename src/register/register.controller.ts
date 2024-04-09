import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterDto } from './entities/register.entity';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService, private readonly userService:UserService) {}

  @Post()
  async register(@Body() body: RegisterDto): Promise<User> {
    try {
      const createdProfile = await this.registerService.register(body);
      const user = this.userService.findOne(createdProfile)

      return user;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw for error handling middleware
    }
  }
}
