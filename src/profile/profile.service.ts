import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UserDto } from 'src/user/entities/user.entity';
import { ProfileDto } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async createProfile(data: ProfileDto, user:UserDto) {
    const usuarioExistente = await this.prisma.user.findUnique({where:{email: user.email}});
  
    if (usuarioExistente) {
      throw new Error('Endereço de email já existe. Por favor, escolha um email único.');
    }

    return this.prisma.profile.create({
      data:{
        name: data.name,
        create_at: data.create_at,
        update_at:data.update_at,
        userId: user.id,
      }
    })
  }

}
