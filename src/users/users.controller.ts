import { RolesGuard } from "./../auth/roles-guard";
import { CreateUserDto } from "./dto/create-user.dto";
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth.decorator";

@ApiTags("Пользователи")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: "Создание пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: "Получить всех пользователей" })
  @ApiResponse({ status: 200, type: [User] })
  // @UseGuards(JwtAuthGuard)
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
