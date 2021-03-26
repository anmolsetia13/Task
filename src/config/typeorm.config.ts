import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    name: 'default',
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database:'userDataNew',
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    autoLoadEntities:true
}