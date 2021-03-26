import { Entity, EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserStatus } from "./user-status.enum";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';


@EntityRepository(User)
export class UserRepository extends Repository<User> {
   

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { title, description, username, password } = createUserDto;

    


        const user  = new User();
        user.title = title;
        user.username = username;
        user.description = description;
        user.status = UserStatus.OPEN;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        
        
    
        await user.save();

        return user;

       
        

    }

    

    async validateUserPassword(createUserDto: CreateUserDto): Promise<string> {
        const { username, password } = createUserDto;
        const user = await this.findOne({ username });
        if( user && await user.validatePassword(password)) {
            return user.username;

        } else {
            
            return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password,salt);
    }

  
  

}
