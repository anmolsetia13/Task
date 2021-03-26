import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import {UsersService} from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { FormRepository } from '../form/form.repository';
import { FormModule } from '../form/form.module';



@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'topSecret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserRepository,FormRepository]),FormModule
  ],

  controllers: [UsersController],
  providers: [UsersService,
              JwtStrategy,

  ],
  exports: [
    JwtStrategy,
    PassportModule,
  ],
})
export class UsersModule {}
