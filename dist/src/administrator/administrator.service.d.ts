import { Administrator } from 'entities/administrator.entity';
import { Repository } from 'typeorm';
export declare class AdministratorService {
    private readonly administrator;
    constructor(administrator: Repository<Administrator>);
    getAll(): Promise<Administrator[]>;
    getById(id: number): Promise<Administrator>;
}
