import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./CreateUser.dto";

export class PatchUserDto extends PartialType(CreateUserDto) {
   
}