import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Column } from 'typeorm';


export class CreateUserDto {

   
   
    title:string
    description: string

    
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    password: string;


    @Column()
    salt: string
}
