import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../DTOs/GetUsersParam.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService {

    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ){}

    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number
    ){
        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        
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
    public findOneById(id: string) {
        return {
            id: 2,
            firstName: 'Tofunmi',
            email: 'tofunmi@doe.com'
        }
        
    }
}