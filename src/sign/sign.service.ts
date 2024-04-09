import { Injectable } from '@nestjs/common';

@Injectable()
export class SignService {
    
    teste(name:string): string{
        return name == 'lindo'?'OK':'NOT OK'
    }
    

}
