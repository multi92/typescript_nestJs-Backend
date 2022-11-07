import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from '../../../dist/entities/administrator.entity';
import { AddAdministratorDto } from 'src/dtos/administrator/add.administrator.dto';
import { EditAdministratorDto } from 'src/dtos/administrator/edit.administrator.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AdministratorService {
    constructor(
        @InjectRepository(Administrator) private readonly administrator: Repository<Administrator>,

    ) { }

    getAll(): Promise<Administrator[]> {
        //uzimanje iz trenutnog objekta 
        //vracanje spiska svih tabela administrator, proces koji traje neko vreme, vraca promis->await (listu administratora)
        return this.administrator.find();


    }

    getById(id: number): Promise<Administrator> {
        return this.administrator.findOne({ where: { administratorId: id } });
    }

    add(data: AddAdministratorDto): Promise<Administrator> {
        //DTO -> Model 
        //username -> username
        //password - [`] -> passwordHash ! po izboru Hash SHA512

        const crypto = require('crypto');

        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);

        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        let newAdmin: Administrator = new Administrator();
        newAdmin.username = data.username;
        newAdmin.passwordHash = passwordHashString;

        return this.administrator.save(newAdmin);

    }

    async editById(id: number, data: EditAdministratorDto): Promise<Administrator> {
        let admin: Administrator = await this.administrator.findOne({ where: { administratorId: id } });

        const crypto = require('crypto');

        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);

        const passwordHashString = passwordHash.digest('hex').toUpperCase();


        admin.passwordHash = passwordHash;
        return this.administrator.save(admin);




    }

}
