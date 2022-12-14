import { Controller, Get } from '@nestjs/common';
import { Administrator } from '../../dist/entities/administrator.entity';
import { AdministratorService } from '../services/administrator/administrator.service';

@Controller()
export class AppController {

  constructor(
    private administratorService: AdministratorService
  ) { }


  @Get()
  getHello(): string {
    return 'Hello world'
  }

  @Get('world')
  getWorld(): string {
    return 'Wolrd'
  }



}
