import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from 'config/database.configuration';
import { Administrator } from '../dist/entities/administrator.entity';
import { AdministratorService } from './services/administrator/administrator.service';
import { AdministratorController } from './controllers/api/administrator.controller';


@Module({
  imports: [
    //modul za povezivanje baze
    TypeOrmModule.forRoot({
      //parametri konekcije
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: '',
      database: DatabaseConfiguration.database,
      entities: [Administrator]
    }),
    //featuri koji su dostupni ovom modulu 
    TypeOrmModule.forFeature([Administrator])
  ],
  controllers: [AppController, AdministratorController],
  providers: [AdministratorService],
})
export class AppModule { }
