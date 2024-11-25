import { Body, Controller, DefaultValuePipe, Get, Headers, Ip, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './DTOs/CreateUser.dto';
import { GetUsersParamDto } from './DTOs/GetUsersParam.dto';
import { PatchUserDto } from './DTOs/PatchUser.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
    constructor(
        //injecting user service
        private readonly userService: UsersService
    ){}
    
    @Get('/:id?')
    public getUsers(
        @Param() getUserParamDto: GetUsersParamDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ){
        return this.userService.findAll(getUserParamDto, limit, page);
    }

    @Post()
    public createUsers(
        @Body() createUserDto: CreateUserDto, 
    ){
        console.log(createUserDto instanceof CreateUserDto);
        return "You sent a post request to users endpoint";
    }

    @Patch()
    public patchUser(
        @Body() patchUserDto: PatchUserDto,
    ){
        return patchUserDto;
    }

}
