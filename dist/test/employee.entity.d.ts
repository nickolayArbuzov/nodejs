import { Contact } from "./contact.entity";
import { Meeting } from "./meeting.entity";
import { Task } from "./task.entity";
export declare class Employee {
    id: number;
    name: string;
    meetings: Meeting[];
    manager: Employee;
    directReports: Employee[];
    contact: Contact;
    tasks: Task[];
}
