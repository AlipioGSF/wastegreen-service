import { Injectable } from '@nestjs/common';
import { RegisterDto } from './entities/register.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RegisterService {
  constructor(private prisma: PrismaService) {}

  async register(body: RegisterDto) {
    try {
      // Check for existing user with the same email
      const existingUser = await this.prisma.user.findUnique({
        where: { email: body.email },
      });

      if (existingUser) {
        throw new Error('Email already exists'); // Or handle it differently (e.g., return specific error code)
      }

      // Create profile and user if email is unique
      const createdProfile = await this.prisma.profile.create({
        data: {
          name: body.name,
          create_at: new Date(),
          update_at: new Date(),
          address: {
            create: {
              street: body.street,
              city: body.city,
              state: body.state,
              number: Number(body.number),
              zipcode: body.zipcode,
            },
          },
          user: {
            create: {
              email: body.email,
              password: body.password, // Assuming password hashing is done elsewhere
            },
          },
        },
      }); 

      return createdProfile.userId;
    } catch (error) {
      // Handle errors appropriately (e.g., log the error, return a specific error response)
      console.error(error);
      throw error; // Or re-throw for further handling
    }
  }
}
