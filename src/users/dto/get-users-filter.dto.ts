import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { UserStatus } from "../user-status.enum";

export class GetUsersFilterDto {
    @IsOptional()
    @IsIn([UserStatus.OPEN, UserStatus.DONE, UserStatus.IN_PROGRESS])
    status: UserStatus;

   
}