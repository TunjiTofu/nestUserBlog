import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World, this is good!';
  }

  getName(): string {
    return 'My name is this!';
  }
}
