import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {

    constructor(
        @Inject(forwardRef (() => UsersService))
        private readonly usersService: UsersService
    ){}

    /**
     * login
     */
    public login(email: string, password: string, id: string) {
        const user = this.usersService.findOneById('2');
        return 'SAMPLE_TOKEN';
        
    }

    /**
     * isAuth
     */
    public isAuth() {
        return true;
    }
}
