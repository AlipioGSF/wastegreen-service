import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';


const fakeUsers = [
    {
        id: 1,
        username: "tikoliro",
        password:"pass123"
    },
    {
        id: 1,
        username: "sehLoiro",
        password:"yo213213"
    },
]

@Injectable()
export class AuthService {

    validateUser({username, password}: AuthPayloadDto){
        const findUser = fakeUsers.find((user) => user.username === username);
        if(!findUser) return null;

        if(password === findUser.password){
            
        }
    }

}
