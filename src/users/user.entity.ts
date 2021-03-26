import { BaseEntity, Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, OneToMany, Unique } from "typeorm";
import { UserStatus } from "./user-status.enum";
import * as bcrypt from 'bcrypt';
import { Form } from "../form/form.entity";


@Entity()

export class User extends BaseEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: UserStatus;

    @Column()
    salt: string;

    @Column()
    form: Form[] = [];



    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);

        return hash === this.password;
    }


}