import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

@Post()
login(@Body() authPayload){

}


}