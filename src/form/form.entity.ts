import { BaseEntity, Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm';
import { ObjectId } from 'mongodb';
import { FormFields } from './form.enum';
import { User } from '../users/user.entity';
@Entity()
export class Form extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId;
 
  @Column()
  title: string;
 
  @Column()
  description: string;
 
  @Column()
  formFields: FormFields;
 
  @Column()
  user: User; //One to many
  
}