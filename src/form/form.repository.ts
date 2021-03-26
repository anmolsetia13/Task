import{​​​​​​​​User}​​​​​​​​from'src/users/user.entity';
import{​​​​​​​​Repository,EntityRepository}​​​​​​​​from'typeorm';
import{​​​​​​​​ FormCreateDto }​​​​​​​​from'./dto/form-create.dto';
import{​​​​​​​​ Form }​​​​​​​​from'./form.entity';
 
@EntityRepository(Form)
export class FormRepository extends Repository<Form>{​​​​​​​​
async createForm(formCreateDto:FormCreateDto, user: User): Promise<Form> {​​​​​​​​
const {​​​​​​​​title, description}​​​​​​​​ = formCreateDto;
 
const form = new Form();
form.title = title;
form.description = description;
form.user = user;
await form.save();
return form;
}​​​​​​​​
}​​​​​​​​

