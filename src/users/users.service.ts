import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserStatus } from './user-status.enum';
import { User } from './user.entity';
import { UserRepository} from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';





@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
        ){}


      

        async getUserById(id: ObjectID): Promise<User> {
            

            const found = await this.userRepository.findOne(id);

            if( !found) {
            throw new NotFoundException(`User with ID "${id}" not found`);
            }

        return found;
        }

      async createUser(createUserDto: CreateUserDto): Promise<User> {

        return this.userRepository.createUser(createUserDto);
    }

   

    async deleteUser(id: ObjectID): Promise<void>{

        const result = await this.userRepository.delete(id);

        if(result.affected === 0) {
               
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        
       
    }

    async updateUSerStatus(id: ObjectID, status: UserStatus): Promise<User>  {

        const user = await this.getUserById(id);
        user.status = status;
        await user.save();
        return user;
    }

    async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string}> {
        const username = await this.userRepository.validateUserPassword(createUserDto);
        
        if(!username) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        const payload: JwtPayload = { username };
        const accessToken = await  this.jwtService.sign(payload);

        return { accessToken };
    }


    

   
}
