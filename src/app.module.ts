import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignController } from './sign/sign.controller';
import { SignService } from './sign/sign.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController, SignController, AuthController],
  providers: [AppService, SignService, AuthService],
})
export class AppModule {}
