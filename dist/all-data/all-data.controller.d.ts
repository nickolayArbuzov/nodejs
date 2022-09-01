import { AllDataService } from "./all-data.service";
export declare class AllDataController {
    private allDataService;
    constructor(allDataService: AllDataService);
    delete(): Promise<void>;
}
