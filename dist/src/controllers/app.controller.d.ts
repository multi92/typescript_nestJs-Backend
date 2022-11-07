import { AdministratorService } from '../services/administrator/administrator.service';
export declare class AppController {
    private administratorService;
    constructor(administratorService: AdministratorService);
    getHello(): string;
    getWorld(): string;
}
