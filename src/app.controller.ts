import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Application running!';
  }

  @Get('/status')
  newEndpoint() {
    return 'Application running correctly on the port 3000';
  }
}
