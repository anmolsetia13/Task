import { UseGuards, ValidationPipe } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { GetUser } from '../users/get-user.decorator';
import { User } from 'src/users/user.entity';
import { FormCreateDto } from './dto/form-create.dto';
import { Form } from './form.entity';
import { FormService } from './form.service';
import { AuthGuard } from '@nestjs/passport';
 
@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}
 
  //creating form
  @Post('/createForm')
  createForm(
    @Body(ValidationPipe) formCreateDto: FormCreateDto,
    @GetUser() user: User,
  ): Promise<Form> {
    return this.formService.createForm(formCreateDto, user);
  }
}