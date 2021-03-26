import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { FormCreateDto } from './dto/form-create.dto';
import { Form } from './form.entity';
import { FormRepository } from './form.repository';
 
@Injectable()
export class FormService {
  constructor(
    @InjectRepository(FormRepository)
    private formRepository: FormRepository,
  ) {}
 
  async createForm(formCreateDto: FormCreateDto, user: User): Promise<Form> {
    return this.formRepository.createForm(formCreateDto, user);
  }
}