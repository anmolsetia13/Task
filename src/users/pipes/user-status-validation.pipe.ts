import { BadRequestException, PipeTransform } from "@nestjs/common";
import { UserStatus } from "../user-status.enum";

export class UserStatusValidationPipe implements PipeTransform {

    readonly allowedStatuses = [
        UserStatus.OPEN,
        UserStatus.IN_PROGRESS,
        UserStatus.DONE
    ];

    transform(value: any) {
       value = value.toUpperCase();

       if(!this.isStatusValid(value)) {
           throw new BadRequestException(`"${value}" is an invalid status`);
       }
        
        return value;

    }

    private isStatusValid(status: any) {
       const idx =  this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}