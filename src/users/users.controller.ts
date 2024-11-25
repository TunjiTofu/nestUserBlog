import { Body, Controller, DefaultValuePipe, Get, Headers, Ip, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { query } from 'express';
import { request } from 'http';
import { CreateUserDto } from './DTOs/CreateUser.dto';
import { GetUsersParamDto } from './DTOs/GetUsersParam.dto';
import { PatchUserDto } from './DTOs/PatchUser.dto';

@Controller('users')
export class UsersController {
    
    @Get('/:id?')
    public getUsers(
        @Param() getUserParamDto: GetUsersParamDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ){
        console.log(getUserParamDto);
        return "You sent a get request to users endpoint";
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
