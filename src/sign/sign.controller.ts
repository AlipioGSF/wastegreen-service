import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { SignService } from './sign.service';

@Controller('sign')
export class SignController {
    constructor (private readonly signService: SignService){};


    @Post()
    login(@Body() body){
        return this.signService.teste(body.name)
    }
}
