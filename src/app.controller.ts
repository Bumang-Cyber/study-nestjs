import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 접두어(prefix)를 만든다.
export class AppController {
  constructor(private readonly appService: AppService) {}
}
