import { Employee } from "./employee.entity";
export declare class Contact {
    id: number;
    phone: string;
    email: string;
    employeeId: number;
    employee: Employee;
}
