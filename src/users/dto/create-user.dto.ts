import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Почтовый адрес" })
  @IsString({ message: "Должна быть строка" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;

  @ApiProperty({ example: "12345678", description: "Пароль" })
  @IsString({ message: "Должна быть строка" })
  @Length(4, 16, { message: "Не меньше 4 и не больше 16" })
  readonly password: string;
}
