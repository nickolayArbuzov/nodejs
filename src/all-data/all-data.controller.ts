import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {AllDataService} from "./all-data.service";


@Controller('test/all-data')
export class AllDataController {

    constructor(private allDataService: AllDataService) {}

    @Delete()
    @HttpCode(204)
    delete(){
        this.allDataService.deleteAllData()
    }

}