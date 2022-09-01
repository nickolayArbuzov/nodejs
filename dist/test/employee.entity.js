"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Employee_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
const contact_entity_1 = require("./contact.entity");
const meeting_entity_1 = require("./meeting.entity");
const task_entity_1 = require("./task.entity");
let Employee = Employee_1 = class Employee {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => meeting_entity_1.Meeting, meeting => meeting.attendies),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Employee.prototype, "meetings", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employee_1, employee => employee.directReports, { onDelete: 'SET NULL' }),
    __metadata("design:type", Employee)
], Employee.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Employee_1, employee => employee.manager),
    __metadata("design:type", Array)
], Employee.prototype, "directReports", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => contact_entity_1.Contact, contact => contact.employee),
    __metadata("design:type", contact_entity_1.Contact)
], Employee.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, task => task.employee),
    __metadata("design:type", Array)
], Employee.prototype, "tasks", void 0);
Employee = Employee_1 = __decorate([
    (0, typeorm_1.Entity)()
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.entity.js.map