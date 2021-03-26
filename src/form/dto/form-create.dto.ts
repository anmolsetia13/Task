import { ObjectId } from 'mongodb';
import { ObjectIdColumn } from 'typeorm';
 
export class FormCreateDto {
  @ObjectIdColumn()
  id: ObjectId;
 
  title: string;
 
  description: string;
}