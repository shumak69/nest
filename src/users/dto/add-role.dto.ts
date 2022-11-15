import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Должна быть строка" })
  readonly value: string;
  @IsNumber({}, { message: "Должна быть строка" })
  readonly userId: number;
}
