import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { error } from 'console';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){};

    @Get()
    findAll(){
        return this.userService.findAll({});
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.userService.findOne(Number(id));
    }

    @Post()
    createUser(@Body() body){
        return this.userService.createUser(body);
    }

    @Delete(':id')
    deleteUser(@Param('id') id:number){
        try{
            const response = this.userService.deleteUser(Number(id));

            return response.then(({id}) => {
                return `user ${id} foi deletado`
            }).catch(()=>{
                return "Algo deu errado ao excluir o usuário"; 
            })

        }
        catch(error){
            return console.log(error)
        }
    }

}
