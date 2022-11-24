import { Body, Controller, Get, Post } from "@nestjs/common";
import { Cat } from "./cat.model";
import { Person } from "./person.model";
import { PersonsService } from "./persons.service";


@Controller('/persons')
export class PersonsController {

    constructor(private readonly personsService: PersonsService) { }


    @Get()
    getAll() {
        return this.personsService.getAll();
    }

    @Post()
    create(@Body() newPerson: Person) {
        console.log(newPerson);
        return this.personsService.add(newPerson);
    }
}