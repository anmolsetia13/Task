import { IsIn } from 'class-validator';
import { ObjectId } from 'mongodb';
import { ObjectIdColumn } from 'typeorm';
import { FormFields } from '../form.enum';
 
export class FormCreateDto {
  @ObjectIdColumn()
  id: ObjectId;
 
  title: string;
 
  description: string;


  @IsIn([FormFields.DropDown, FormFields.TextField, FormFields.RadioButton, FormFields.CheckBox])
  type: FormFields;

  
}