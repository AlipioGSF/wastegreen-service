import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ProfileDto } from 'src/profile/entities/profile.entity';
import { AddressDto } from './entities/address.entity';

@Injectable()
export class AddressService {
    constructor(private prisma: PrismaService) {}

    async createAddress(data: AddressDto, profileId: number){
        return this.prisma.address.create({
            data: {
                city: data.city,
                number: Number(data.number),
                state: data.state,
                street: data.street,
                zipcode: data.zipcode,
                profileId: profileId
            }
        })
    }

}
