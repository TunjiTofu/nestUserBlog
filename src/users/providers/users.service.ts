import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../DTOs/GetUsersParam.dto";

@Injectable()
export class UsersService {

    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number
    ){
        return [
            {
                firstName: 'john',
                email: 'john@doe.com'
            },
            {
                firstName: 'Tofunmi',
                email: 'tofunmi@doe.com'
            }
        ]
    }

    /**
     * findUserById
     */
    public findOneById(id: number) {
        return {
            id: 2,
            firstName: 'Tofunmi',
            email: 'tofunmi@doe.com'
        }
        
    }
}