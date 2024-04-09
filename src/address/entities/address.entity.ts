import { ProfileDto } from "src/profile/entities/profile.entity";

export class AddressDto{
     id?:number;
     street:string;
     city:string;
     state :string;
     zipcode:string;
     number:number;
     profile?: ProfileDto
}