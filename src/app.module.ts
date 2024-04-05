import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignController } from './sign/sign.controller';
import { SignService } from './sign/sign.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, SignController, AuthController, UserController, ProfileController],
  providers: [AppService, SignService, AuthService, UserService, PrismaService],
})
export class AppModule {}
