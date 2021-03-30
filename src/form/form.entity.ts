import { BaseEntity, Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm';
import { ObjectId } from 'mongodb';
import { FormFields } from './form.enum';
import { User } from '../users/user.entity';
import { IsIn } from 'class-validator';
@Entity()
export class Form {
  @ObjectIdColumn()
  id: ObjectId;
 
  @Column()
  title: string;
 
  @Column()
  description: string;
 
  @Column()
  @IsIn([FormFields.DropDown, FormFields.TextField, FormFields.RadioButton, FormFields.CheckBox])
  type: FormFields;
 

  
  
}