import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './user.entity';
@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('All')
  async findAll() {
    return await this.userService.findAll();
  }
  @Get('id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
  @Post()
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.userService.remove(id);
  }
}
