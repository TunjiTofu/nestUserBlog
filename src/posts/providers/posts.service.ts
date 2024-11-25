import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {

    constructor(private readonly userService: UsersService){}

    /**
     * findAll
     */
    public findAll(userId: string) {
        const user = this.userService.findOneById(userId);

        return [
            {
                user: user,
                title: 'Test Title',
                content: 'Test contents',
            },
            {
                user: user,
                title: 'Test Title 2',
                content: 'Test contents 2',
            }
        ]
    }
}
