import { Administrator } from "../../../dist/entities/administrator.entity";
import { AddAdministratorDto } from "src/dtos/administrator/add.administrator.dto";
import { EditAdministratorDto } from "src/dtos/administrator/edit.administrator.dto";
import { AdministratorService } from "src/services/administrator/administrator.service";
export declare class AdministratorController {
    private administratorService;
    constructor(administratorService: AdministratorService);
    getAll(): Promise<Administrator[]>;
    getById(administratorId: number): Promise<Administrator>;
    add(data: AddAdministratorDto): Promise<Administrator>;
    edit(id: number, data: EditAdministratorDto): Promise<Administrator>;
}
