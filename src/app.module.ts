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
import { RewardsController } from './rewards/rewards.controller';
import { AddressService } from './address/address.service';
import { RegisterService } from './register/register.service';
import { ProfileService } from './profile/profile.service';
import { RegisterController } from './register/register.controller';

@Module({
  imports: [],
  controllers: [AppController, SignController, AuthController, UserController, ProfileController, RewardsController, RegisterController],
  providers: [AppService, SignService, AuthService, UserService, PrismaService, AddressService, RegisterService, ProfileService],
})
export class AppModule {}
