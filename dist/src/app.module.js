"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./controllers/app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const database_configuration_1 = require("../config/database.configuration");
const administrator_entity_1 = require("../dist/entities/administrator.entity");
const administrator_service_1 = require("./services/administrator/administrator.service");
const administrator_controller_1 = require("./controllers/api/administrator.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: database_configuration_1.DatabaseConfiguration.hostname,
                port: 3306,
                username: database_configuration_1.DatabaseConfiguration.username,
                password: '',
                database: database_configuration_1.DatabaseConfiguration.database,
                entities: [administrator_entity_1.Administrator]
            }),
            typeorm_1.TypeOrmModule.forFeature([administrator_entity_1.Administrator])
        ],
        controllers: [app_controller_1.AppController, administrator_controller_1.AdministratorController],
        providers: [administrator_service_1.AdministratorService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map