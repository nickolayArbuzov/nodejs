import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {AllDataService} from "./all-data.service";


@Controller('test')
export class AllDataController {

    constructor(private allDataService: AllDataService) {}

    @Delete('all-data')
    @HttpCode(204)
    delete(){
       return this.allDataService.deleteAllData()
    }

}