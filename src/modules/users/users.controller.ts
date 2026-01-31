import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) { }

    @Get()
    findAll() {
        return this.userService.findAllUsers()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userService.findOneUser(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.updateUser(id, updateUserDto)
    }
}
