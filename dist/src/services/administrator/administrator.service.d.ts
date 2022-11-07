import { Administrator } from '../../../dist/entities/administrator.entity';
import { AddAdministratorDto } from 'src/dtos/administrator/add.administrator.dto';
import { EditAdministratorDto } from 'src/dtos/administrator/edit.administrator.dto';
import { Repository } from 'typeorm';
export declare class AdministratorService {
    private readonly administrator;
    constructor(administrator: Repository<Administrator>);
    getAll(): Promise<Administrator[]>;
    getById(id: number): Promise<Administrator>;
    add(data: AddAdministratorDto): Promise<Administrator>;
    editById(id: number, data: EditAdministratorDto): Promise<Administrator>;
}
