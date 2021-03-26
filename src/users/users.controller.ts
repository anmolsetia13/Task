import { Body, Controller, Get, Param, Post, Delete, Patch, ValidationPipe, UseGuards } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';
import { UserStatus } from './user-status.enum';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';




@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    

    @Get('/:id')
    getUserById(@Param('id') id: ObjectID): Promise<User> {
        return this.usersService.getUserById(id);
    }
    

    @Post()
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<User> {

        return this.usersService.createUser(createUserDto);
    }

  

    @Delete('/:id')
    deleteUser(@Param('id') id: ObjectID): Promise<void> {
        return this.usersService.deleteUser(id)
    }

    @Patch('/:id/status')
    updateUserStatus(
        @Param('id') id: ObjectID,
        @Body('status', UserStatusValidationPipe) status: UserStatus,
    ): Promise<User> {
    return this.usersService.updateUSerStatus(id, status);
    }

    @Post('signIn')
    signIn(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<{ accessToken: string}> {
        return this.usersService.signIn(createUserDto);
    }

    @Post('test')
    @UseGuards(AuthGuard())
    test(@GetUser() user: User) {
    console.log(user);
    }

  
}



  
    


