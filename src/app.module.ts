import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { FormModule } from './form/form.module';
import { UsersModule } from './users/users.module';




@Module({
  imports: [

    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,FormModule
   
  ],
  
 
})
export class AppModule {}
