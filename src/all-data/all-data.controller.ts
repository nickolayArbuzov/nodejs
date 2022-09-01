import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AllDataService} from "./all-data.service";


@Controller('test/all-data')
export class AllDataController {

    constructor(private allDataService: AllDataService) {}

    @Delete()
    delete(){
        this.allDataService.deleteAllData()
    }

}